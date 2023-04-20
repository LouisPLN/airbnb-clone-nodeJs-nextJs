const ResponseComment = () => {
  return (
    <article>
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-bold dark:text-white">
            Ivan Braga
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <time>Avr. 20, 2023</time>
          </p>
        </div>
        <button
          id="dropdownComment1Button"
          data-dropdown-toggle="dropdownComment1"
          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
          <span className="sr-only">Paramètres des commentaires</span>
        </button>
        <div
          id="dropdownComment1"
          className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownMenuIconHorizontalButton"
          >
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                📝 Modifier
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-warning py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-warning"
              >
                🗑️ Supprimer
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ipsam.
        Enim expedita saepe omnis eum commodi eius delectus amet deserunt
        voluptatibus itaque, iste facilis, porro tempore id recusandae
        temporibus odit?
      </p>
    </article>
  );
};

export default ResponseComment;
