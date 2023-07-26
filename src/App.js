import "./App.css";
import React from "react";
import M_Card from "./Components/Molecules/M_Card";
import { httpGET } from "./Utils/helpers";
function App() {
  const [colorList, setColorList] = React.useState([]);
  const [details, setDetails] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const handleColorList = (color) => {
    setColorList((oldColors) => [...oldColors, color]);
  };
  const [page, setPage] = React.useState(1);
  const getDetails = async () => {
    setIsLoading(true);
    let response = await httpGET(`/jobs?page=${page}`);
    setDetails(response);
    setIsLoading(false);
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
    getDetails();
    setColorList([]);
  }, [page]);
  return (
    <div className="lg:px-10 md:px-8 sm:px-6 py-4">
      <header>
        <div className="title text-2xl">
          Recommended jobs{" "}
          <span className="border-2 p-1 px-2 font-semibold text-sm  border-neutral-500 border-opacity-75 rounded-full">
            {details && details.count ? details.count : ""}
          </span>
        </div>
      </header>
      <main className="mt-4 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-1">
        {isLoading ? (
          <>
            <div class="max-w-sm  bg-white shadow-lg rounded-lg overflow-hidden">
              <div class="animate-pulse bg-gray-200 h-40 w-full"></div>
              <div class="p-4">
                <div class="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                <div class="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
            <div class="max-w-sm  bg-white shadow-lg rounded-lg overflow-hidden">
              <div class="animate-pulse bg-gray-200 h-40 w-full"></div>
              <div class="p-4">
                <div class="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                <div class="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
            <div class="max-w-sm  bg-white shadow-lg rounded-lg overflow-hidden">
              <div class="animate-pulse bg-gray-200 h-40 w-full"></div>
              <div class="p-4">
                <div class="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                <div class="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
            <div class="max-w-sm  bg-white shadow-lg rounded-lg overflow-hidden">
              <div class="animate-pulse bg-gray-200 h-40 w-full"></div>
              <div class="p-4">
                <div class="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                <div class="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          </>
        ) : (
          details &&
          details.jobs &&
          details.jobs.map((item) => (
            <M_Card
              onColorAdd={handleColorList}
              colorList={colorList}
              page={page}
              {...item}
            />
          ))
        )}
      </main>
      <footer className="mt-4">
        <div className="flex items-center justify-center space-x-2">
          <div
            href="#"
            onClick={() => {
              handlePageChange(-1);
            }}
            className={`cursor-pointer px-3 py-1 ${
              page === 1
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
