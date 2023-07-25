import "./App.css";
import React from "react";
import M_Card from "./Components/Molecules/M_Card";
import { httpGET } from "./Utils/helpers";
function App() {
  const [details, setDetails] = React.useState({
    count: 100,
    jobs: [
      {
        company: {
          logo_url:
            "https://uam-cdn.nextlevel.app/assets/logos/NextLevel_Logo.png",
          name: "Company C",
        },
        created_date: "2023-07-25T18:28:44.805105",
        hourly_rate: 27,
        location: "City 1",
        tags: ["DevOps", "AWS"],
        title: "Job Title 0",
      },
      {
        company: {
          logo_url:
            "https://uam-cdn.nextlevel.app/assets/logos/NextLevel_Logo.png",
          name: "Company D",
        },
        created_date: "2023-07-25T18:28:44.805133",
        hourly_rate: 36,
        location: "City 1",
        tags: ["React", "JS"],
        title: "Job Title 1",
      },
      {
        company: {
          logo_url:
            "https://uam-cdn.nextlevel.app/assets/logos/NextLevel_Logo.png",
          name: "Company B",
        },
        created_date: "2023-07-25T18:28:44.805139",
        hourly_rate: 45,
        location: "City 2",
        tags: ["Python", "Flask"],
        title: "Job Title 2",
      },
      {
        company: {
          logo_url:
            "https://uam-cdn.nextlevel.app/assets/logos/NextLevel_Logo.png",
          name: "Company B",
        },
        created_date: "2023-07-25T18:28:44.805145",
        hourly_rate: 50,
        location: "City 4",
        tags: ["React", "JS"],
        title: "Job Title 3",
      },
      {
        company: {
          logo_url:
            "https://uam-cdn.nextlevel.app/assets/logos/NextLevel_Logo.png",
          name: "Company A",
        },
        created_date: "2023-07-25T18:28:44.805150",
        hourly_rate: 29,
        location: "City 1",
        tags: ["React", "JS"],
        title: "Job Title 4",
      },
      {
        company: {
          logo_url:
            "https://uam-cdn.nextlevel.app/assets/logos/NextLevel_Logo.png",
          name: "Company B",
        },
        created_date: "2023-07-25T18:28:44.805156",
        hourly_rate: 31,
        location: "City 4",
        tags: ["Python", "Flask"],
        title: "Job Title 5",
      },
      {
        company: {
          logo_url:
            "https://uam-cdn.nextlevel.app/assets/logos/NextLevel_Logo.png",
          name: "Company D",
        },
        created_date: "2023-07-25T18:28:44.805162",
        hourly_rate: 32,
        location: "City 1",
        tags: ["React", "JS"],
        title: "Job Title 6",
      },
      {
        company: {
          logo_url:
            "https://uam-cdn.nextlevel.app/assets/logos/NextLevel_Logo.png",
          name: "Company B",
        },
        created_date: "2023-07-25T18:28:44.805167",
        hourly_rate: 49,
        location: "City 2",
        tags: ["ML", "TensorFlow"],
        title: "Job Title 7",
      },
      {
        company: {
          logo_url:
            "https://uam-cdn.nextlevel.app/assets/logos/NextLevel_Logo.png",
          name: "Company A",
        },
        created_date: "2023-07-25T18:28:44.805172",
        hourly_rate: 36,
        location: "City 1",
        tags: ["React", "JS"],
        title: "Job Title 8",
      },
      {
        company: {
          logo_url:
            "https://uam-cdn.nextlevel.app/assets/logos/NextLevel_Logo.png",
          name: "Company C",
        },
        created_date: "2023-07-25T18:28:44.805178",
        hourly_rate: 40,
        location: "City 1",
        tags: ["React", "JS"],
        title: "Job Title 9",
      },
    ],
  });
  const [page, setPage] = React.useState(1);
  const getDetails = async () => {
    let response = await httpGET(`/jobs?page=${page}`);
    setPage(response);
  };
  const handlePageChange = (opt) => {
    let currentPage = page + parseInt(opt);
    currentPage =
      details && details.count && details.count / 10 >= currentPage
        ? currentPage
        : page;
    if (currentPage > 0) {
      setPage(currentPage);
    }
  };
  React.useEffect(() => {
    // getDetails();
  }, [page]);
  return (
    <div className="lg:px-10 md:px-8 sm:px-6 py-4">
      <header>
        <div className="title text-2xl">
          Recommended jobs{" "}
          <span className="border-2 p-1 px-2 font-semibold text-sm  border-neutral-500 border-opacity-75 rounded-full">
            100
          </span>
        </div>
      </header>
      <main className="mt-4 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-1">
        {details.jobs.map((item) => (
          <M_Card {...item} />
        ))}
      </main>
      <footer className="mt-4">
        <div className="flex items-center justify-center space-x-2">
          <div
            href="#"
            onClick={() => {
              handlePageChange(-1);
            }}
            className={`cursor-pointer px-3 py-1 ${
              page == 1
                ? "bg-gray-100 text-gray-400"
                : "bg-gray-300 text-gray-600"
            } rounded-lg`}
          >
            Previous
          </div>

          <div
            className="px-3 py-1 bg-blue-500 text-white rounded-lg"
            id="currentPage"
          >
            {page}
          </div>
          {details && details.count && (
            <div
              onClick={() => {
                handlePageChange(+1);
              }}
              className={`cursor-pointer px-3 py-1 ${
                details.count / 10 <= page
                  ? "bg-gray-100 text-gray-400"
                  : "bg-gray-300 text-gray-600"
              } rounded-lg`}
            >
              Next
            </div>
          )}
        </div>
      </footer>
    </div>
  );
}

export default App;
