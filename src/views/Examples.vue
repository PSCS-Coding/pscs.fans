<template>
    <div class="bg-gray-100 mx-auto max-w-md rounded shadow-md p-4">

        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold mr-1">Uh oh! </strong>
            <span class="block sm:inline">Something seriously bad happened.</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
        </div>

        <h1 class="text-teal-700 text-2xl">Heading 1</h1>
        <h2 class="text-teal-600 text-xl">Heading 2</h2>

        <div class="relative w-48 my-2 mx-1">
            <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
            </div>
        </div>

        <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 my-2 mx-1 rounded focus:outline-none focus:shadow-outline">
            Main
        </button>

        <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 my-2 mx-1 rounded focus:outline-none focus:shadow-outline">
            Edit
        </button>

        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 my-2 mx-1 rounded focus:outline-none focus:shadow-outline">
            Delete
        </button>
    </div>
</template>
