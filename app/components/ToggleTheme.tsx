import { MoonIcon } from "@heroicons/react/20/solid";
const ToggleTheme = () => {
    return(
        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            <MoonIcon className="h-6 w-6" />
        </button>  
    )
}
export default ToggleTheme;