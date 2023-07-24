export default function Home() {
    return (
        <div className="m-5">
            <h1 className="text-2xl">Print Friendly Coding Exercise</h1>

            <div className="m-5 p-5 rounded border border-gray-500 bg-gray-50">
                <form>
                    <div className="mb-6">
                        <label htmlFor="website_url" className="block mb-2 text-sm font-medium text-gray-900">Website URL</label>
                        <input type="url" id="website_url"
                               className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               placeholder="https://www.cnn.com" required/>
                    </div>
                    <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                        Submit
                    </button>
                </form>
            </div>

            <div className="m-5 p-5 rounded border border-gray-500 bg-gray-50">
                <h1 className="text-l">Print Friendly Result:</h1>
            </div>
        </div>
    )
}
