import { useEffect } from "react";
import { getAll } from "../http/taskAPI";

export const useFetchData = (setTasks) => {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAll();
          setTasks(data.tasks);
        } catch (error) {
          console.error("Error fetching tasks:", error);
        }
      };
      fetchData();
    }, [setTasks]);
  };

  export const useFilterData = (setTasks, isTodaySelected, isDateSelected, selectedStatus) => {
    useEffect(() => {
        const filterData = async () => {
          try {
            const data = await getAll(
              isTodaySelected ? "Today" : "All",
              isDateSelected ? "Date" : "-Date",
              selectedStatus
            );
            setTasks(data.tasks);
          } catch (error) {
            console.error("Error fetching tasks:", error);
          }
        };
        filterData();
      }, [setTasks, isTodaySelected, isDateSelected, selectedStatus]);
  };
  
  