import React, { useMemo, useState } from "react";
import dynamic from 'next/dynamic';
import axios from "axios";
import { useEffect } from "react";
import ChevronRight from '@/public/assets/chevron-right';
import ChevronLeft from '@/public/assets/chevron-left';
import { format, addMonths, subMonths, getWeeksInMonth, startOfWeek, endOfWeek,addWeeks } from 'date-fns';

// Function to get the number of weeks in the selected month
// const getWeeksInMonth = (year, month) => {
//   const firstDay = new Date(year, month, 1);
//   const lastDay = new Date(year, month + 1, 0);
//   const daysInMonth = lastDay.getDate();
//   const firstDayOfWeek = firstDay.getDay();
//   const lastDayOfWeek = lastDay.getDay();
//   const daysInFirstWeek = 7 - firstDayOfWeek;
//   const daysInLastWeek = 6 - lastDayOfWeek;
//   return Math.ceil((daysInMonth - daysInFirstWeek - daysInLastWeek) / 7) + 2;
// };

function PlacersChart() {
  const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
  
  // Initialize the current month and year to the present date
  // const currentDate = new Date();
  // const currentYear = currentDate.getFullYear();
  // const currentMonth = currentDate.getMonth();

  // Shortened month names
  // const monthNames = [
  //   'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  //   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  // ];

  const [token, setToken] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [selectedWeekIndex, setSelectedWeekIndex] = useState(0);

  // const [currentDateIndex, setCurrentDateIndex] = useState(currentYear * 12 + currentMonth);
  // const [selectedWeek, setSelectedWeek] = useState(1);
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "line-chart",
        height: '100%',
        events: {
          dataPointMouseEnter: (event, chartContext, config) => {
            // Show the tooltip and marker when hovering over a data point
            chartContext.getW().showTooltip(config.dataPointIndex, config.seriesIndex);
          },
          dataPointMouseLeave: (event, chartContext, config) => {
            // Hide the tooltip and marker when leaving a data point
            chartContext.getW().hideTooltip();
          },
        },
      },
      xaxis: {
        categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
      },
      stroke: {
        curve: 'smooth',
        width: 5,
      },
      markers: {
        size: 0,
        colors: '#fff',
        strokeColors: '#546FFF',
        strokeWidth: 4,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        shape: "circle",
        radius: 2,
        
      },
      colors: ['#00B068'],
      tooltip: {
        followCursor: true,
        enabled: true, // Disable the default tooltip
      
      }

    },
    series: [
      {
        name: "No of Ads",
        data: [0, 0, 0, 0, 0, 0, 0],
      },
    ],
  });

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('user-token'));
    if (userToken) {
      setToken(userToken);
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.ad-promoter.com/api/v1/ads/query-date/${selectedStartDate}/${selectedEndDate}`,{
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        
        const arrayLengths = Object.keys(response.data.data.sorted).map(date => ({
          date: date,
          length: response.data.data.sorted[date].length,
        }));
        // // Assuming the response.data is an array of objects with a property 'value'
        const fetchedData = arrayLengths.map(item => item.length);
        
        // // Update the series data in chartData
        setChartData(prevChartData => ({
          ...prevChartData,
          series: [
            {
              name: "No of Ads",
              data: fetchedData,
            },
          ],
        }));
        console.log(fetchedData);
        } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if(token){
      fetchData();
    }
  }, [selectedEndDate, selectedStartDate, token]);

  useEffect(() => {
    const startDate = startOfWeek(selectedDate, { weekStartsOn: 1 });
    const selectedWeekStart = addWeeks(startDate, selectedWeekIndex);
    const selectedWeekEnd = endOfWeek(selectedWeekStart);
    setSelectedWeek({ start: selectedWeekStart, end: selectedWeekEnd });
    setSelectedStartDate(selectedWeekStart.toISOString())
    setSelectedEndDate(selectedWeekEnd.toISOString())
  }, [selectedDate,selectedWeekIndex]);

  const handlePrevMonth = () => {
    setSelectedDate(subMonths(selectedDate, 1));
    setSelectedWeek(null);
  };

  const handleNextMonth = () => {
    setSelectedDate(addMonths(selectedDate, 1));
    setSelectedWeek(null);
  };

  const handleWeekSelect = (weekIndex) => {
    const startDate = startOfWeek(selectedDate, { weekStartsOn: 1 });
    const selectedWeekStart = addMonths(startDate, weekIndex);
    const selectedWeekEnd = endOfWeek(selectedWeekStart);
    setSelectedWeek({ start: selectedWeekStart, end: selectedWeekEnd });
    setSelectedStartDate(selectedWeek.start.toISOString())
    setSelectedEndDate(selectedWeek.end.toISOString())
  };

  const monthString = format(selectedDate, 'MMM yyyy');
  const weeksInMonth = getWeeksInMonth(selectedDate, { weekStartsOn: 1 });

  // Function to handle the left arrow click
  // const handleLeftArrowClick = () => {
  //   setCurrentDateIndex((prevDateIndex) => prevDateIndex - 1);
  // };

  // // Function to handle the right arrow click
  // const handleRightArrowClick = () => {
  //   setCurrentDateIndex((prevDateIndex) => prevDateIndex + 1);
  // };

  // // Get the current month and year based on the index
  // const getCurrentMonthAndYear = (dateIndex) => {
  //   const year = Math.floor(dateIndex / 12);
  //   const month = dateIndex % 12;
  //   return { year, month };
  // };

  // const { year, month } = getCurrentMonthAndYear(currentDateIndex);

  // // Get the number of weeks in the selected month
  // const weeksInMonth = useMemo(() => getWeeksInMonth(year, month), [year, month]);

  // // Function to handle the week dropdown change
  // const handleWeekChange = (event) => {
  //   setSelectedWeek(parseInt(event.target.value));
  // };

  // Function to get the start and end dates of the selected week
  // const getStartAndEndDates = (year, month, week) => {
  //   const firstDay = new Date(year, month, 1);
  //   const firstDayOfWeek = firstDay.getDay();
  //   const startDate = new Date(firstDay);
  //   startDate.setDate(firstDay.getDate() + (week - 1) * 7 - firstDayOfWeek);
  //   const endDate = new Date(startDate);
  //   endDate.setDate(startDate.getDate() + 6);
  //   return { startDate: startDate.toISOString(), endDate: endDate.toISOString() };
  // };

  // // Get the start and end dates of the selected week
  // const { startDate, endDate } = useMemo(() => getStartAndEndDates(year, month, selectedWeek), [
  //   year,
  //   month,
  //   selectedWeek,
  // ]);
  return (
    <div className="dashboard-info-activity activity">
      <div className="dashboard-info-activity-title title">
        <h3>Activity</h3>
        <div className="time-filter">
          <div className="time-week">
            <select onChange={(e) => handleWeekSelect(e.target.value)}>
            {Array.from({ length: weeksInMonth }).map((_, index) => (
              <option key={index} value={index}>
                Week {index + 1}
              </option>
            ))}
            </select>
          </div>
          <div className="month-filter">
            <div onClick={handlePrevMonth}>
              <ChevronLeft />
            </div>
            <h4>{monthString}</h4>
            <div onClick={handleNextMonth}>
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
      <div style={{height: '230px'}} className="dashboard-info-activity-chart chart">
        <Chart
          height={'230px'}
          options={chartData.options}
          series={chartData.series}
          type="line"
        />
      
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(PlacersChart), { ssr: false });
