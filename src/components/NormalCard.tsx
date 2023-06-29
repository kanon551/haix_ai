import React, { useEffect, useState } from 'react';

interface NormalCardProps {
  obj: any;
}

const NormalCard = ({ obj }: NormalCardProps) => {

  return (
    <div className="relative flex items-center justify-center rounded h-full">
      <div className="lg:mb-0 w-webkit-fill-available">
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <div
                data-te-ripple-init
                data-te-ripple-color="light"
                className="flex absolute items-center rounded bg-primary px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-white">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>
                </svg>
                {obj.Location}
            </div>

            <div className="inline-flex w-fit absolute right-5 top-2">
            <div
                className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-indigo-700 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
                {obj.Likes}
            </div>
            <div
                className="flex items-center justify-center rounded-lg bg-pink-500 px-4 py-2 text-center text-white shadow-lg dark:text-gray-200">
                <svg fill="#000000" className="h-4 w-4" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1637.176 1129.412h-112.94v112.94c62.23 0 112.94 50.599 112.94 112.942 0 62.344-50.71 112.941-112.94 112.941h-112.942v112.941c62.23 0 112.941 50.598 112.941 112.942 0 62.343-50.71 112.94-112.94 112.94h-960c-155.634 0-282.354-126.606-282.354-282.352V903.529h106.617c140.16 0 274.334-57.6 368.3-157.778C778.486 602.089 937.28 379.256 957.385 112.94h36.367c50.484 0 98.033 22.363 130.334 61.44 32.64 39.53 45.854 91.144 36.14 141.515-22.7 118.589-60.197 236.048-111.246 349.102-23.83 52.517-19.313 112.602 11.746 160.94 31.397 48.566 84.706 77.591 142.644 77.591h433.807c62.231 0 112.942 50.598 112.942 112.942 0 62.343-50.71 112.94-112.942 112.94m225.883-112.94c0-124.575-101.308-225.883-225.883-225.883H1203.37c-19.651 0-37.044-9.374-47.66-25.863-10.391-16.15-11.86-35.577-3.84-53.196 54.663-121.073 94.87-247.115 119.378-374.513 15.925-83.576-5.873-169.072-60.085-234.578C1157.29 37.384 1078.005 0 993.751 0H846.588v56.47c0 254.457-155.068 473.224-285.063 612.029-72.734 77.477-176.98 122.09-285.967 122.09H56v734.117C56 1742.682 233.318 1920 451.294 1920h960c124.574 0 225.882-101.308 225.882-225.882 0-46.42-14.117-89.676-38.174-125.59 87.869-30.947 151.116-114.862 151.116-213.234 0-46.419-14.118-89.675-38.174-125.59 87.868-30.946 151.115-114.862 151.115-213.233" fill-rule="evenodd"/>
                </svg>
            </div>
            </div>

            <div className="inline-flex w-fit absolute right-5 top-10">
            <div
                className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-indigo-700 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
                {obj.Comments}
            </div>
            <div
                className="flex items-center justify-center rounded-lg bg-blue-500 px-4 py-2 text-center text-white shadow-lg dark:text-gray-200">
                <svg version="1.0" id="Layer_1" 
	 className="h-4 w-4" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
<g>
	<path fill-rule="evenodd" clip-rule="evenodd" fill="#231F20" d="M48,12H4c-2.211,0-4,1.789-4,4v28c0,2.211,1.789,4,4,4h8v12
		c0,1.617,0.973,3.078,2.469,3.695C14.965,63.902,15.484,64,16,64c1.039,0,2.062-0.406,2.828-1.172L33.656,48H48
		c2.211,0,4-1.789,4-4V16C52,13.789,50.211,12,48,12z"/>
	<path fill-rule="evenodd" clip-rule="evenodd" fill="#231F20" d="M60,0H16c-2.211,0-4,1.789-4,4v4h40c2.211,0,4,1.789,4,4v24h4
		c2.211,0,4-1.789,4-4V4C64,1.789,62.211,0,60,0z"/>
</g>
</svg>
            </div>
            </div>


            <img src={obj.Image} className="w-full h-40 rounded-t-lg" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
            </a>
            <svg
              className="absolute text-white dark:text-neutral-700 left-0 bottom-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="currentColor"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>

          </div>

          <div className="p-2">
            <h5 className="text-lg font-bold">{obj.Name}</h5>
            <p className="mb-2 text-neutral-500 dark:text-neutral-300">{`@${obj.Username}`}</p>
          </div>

          <div className="card">
      <div className="card-content">
        <p className="card-text">{`${obj.Status}`}</p>
      </div>
    </div>

    
    <div
                data-te-ripple-init
                data-te-ripple-color="light"
                className="flex absolute bottom-0 right-10 items-center rounded bg-primary text-xs font-small leading-normal text-black">
                #{obj.Caption}
                </div>

            <div className="relative m-4 inline-flex w-full">
                <div className="relative inline-flex w-fit m-1">
                    <div
                        className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-indigo-700 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
                        {obj.Followers}
                    </div>
                    <button
                        type="button"
                        className="inline-block rounded kolor px-7 pb-2.5 pt-3 text-sm font-small leading-normal text-black"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Followers
                    </button>
                    </div>

                    <div className="relative inline-flex w-fit m-1">
                    <div
                        className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-indigo-700 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
                        {obj.Following}
                    </div>
                    <button
                        type="button"
                        className="inline-block rounded kolor px-7 pb-2.5 pt-3 text-sm font-small leading-normal text-black"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Following
                    </button>
                    </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default NormalCard;
