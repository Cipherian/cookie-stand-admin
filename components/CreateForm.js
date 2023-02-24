
export default function CreateForm({formSubmitHandler}) {

    return (
      <div>
      <form onSubmit={formSubmitHandler} className="flex flex-col w-3/5 p-10 mx-auto my-4 mt-5 border border-green-900 rounded-md bg-form-input-box-green">
        <h1 className="text-center font-bold text-3xl mb-6">Create Cookie Stand</h1>
          <label className="text-2xl font-bold mx-64 p-3">ADD Location</label>
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-row w-full h-20">
            <input
              className="w-3/4 h-7 px-2"
              name="location"
              placeholder="Cookie Stand Location"
            />
            <button type="submit" className="w-64 h-16 ml-5 mb-12 rounded-sm bg-button-green font-bold self-end">CREATE</button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full h-10 mt-2 mb-2 space-x-4 ">
          <div className="text-center rounded-sm h-11 bg-form-input-box-green">
            <label className="w-full text-xl mx-auto mb-2 font-bold">Minimum Customers Per Hour</label>
            <input
              className="w-64 max-h-10"
              name="minimum"
            />
          </div>
          <div className="text-center rounded-sm h-11 bg-form-input-box-green">
            <label className="w-full mx-auto mb-2 text-xl font-bold">Maximum Customers Per Hour</label>
            <input
              className="w-64 max-h-10"
              name="maximum"
            />
          </div>
          <div className="text-center rounded-sm h-11 bg-form-input-box-green">
            <label className="w-full mx-auto mb-2 text-xl font-bold ">Average Cookie Sale</label>
            <input
              className="w-64 max-h-10"
              name="average"
            />
          </div>
      </div>

    </form>
    </div>
  );
}

