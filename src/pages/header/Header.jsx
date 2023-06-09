import {
  ChevronDownIcon,
  MapPinIcon,
  HeartIcon,
  SunIcon,
  BoltIcon,
  CloudIcon,
} from '@heroicons/react/20/solid'
import Modal from './Modal'
import Time from './Time'
import Name from './Name'

function Header({weather}) {
  return (
    <div className="flex-col">
    <div className="flex justify-between">
      <div className="min-w-0 flex-1">
        <Name />
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <Time />
          <div className="mt-2 flex flex-1 items-center text-sm text-gray-500">
            <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            {weather?.shortForecast}
          </div>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <HeartIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Favorite
          </button>
        </div>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        {/* <span className="sm:ml-3">
        </span> */}
      </div>
    </div>
    <div className="flex-item-last">
    <Modal />
  </div>
  </div>
  )
}

export default Header