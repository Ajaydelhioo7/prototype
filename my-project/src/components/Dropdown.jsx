import React, { useState } from "react";

function Dropdown() {
  const [isOpen, setisOpen] = useState(false);
  const [drop, setDrop] = useState("Dropdown Button");
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    setisOpen(!isOpen);
  };
  const handleDrop = (item) => {
    setDrop(item.title);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Tags", inputValue);
    // You can do something with the inputValue here, like sending it to an API or updating another state
  };
  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value); // update the input value
  };
  const list = [
    {
      id: "1",
      title: "History",
    },
    {
      id: "2",
      title: "Society",
    },
    {
      id: "3",
      title: "Math",
    },
  ];
  return (
    <>
      <div className="flex w-full justify-between px-4 gap-4">
        {/* button starts here */}
        <div className="flex flex-col">
          <button
            id="dropdownDefaultButton"
            onClick={handleClick}
            data-dropdown-toggle="dropdown"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            {drop}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {isOpen && (
            <div
              id="dropdown"
              className="z-10 absolute top-16 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                {list.map((item) => (
                  <li key={item.id}>
                    <a
                      href="#"
                      key={item.id}
                      onClick={() => handleDrop(item)}
                      onBlur={handleClick}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex-1 flex gap-4">
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter A Field"
            value={inputValue}
            className="border p-2 rounded-md"
          />
          <button
            onClick={handleSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
