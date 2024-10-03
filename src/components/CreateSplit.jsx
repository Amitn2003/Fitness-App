function CreateSplit() {
    return (
      <div className="p-8">
        <h2 className="text-2xl mb-4">Create Split</h2>
        <form>
          <div className="mb-4">
            <label className="block">Workout Name</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="e.g., Arnold Split" />
          </div>
          <div className="mb-4">
            <label className="block">Exercises</label>
            <textarea className="w-full p-2 border rounded" rows="4" placeholder="e.g., Push Ups, Squats"></textarea>
          </div>
          <button className="bg-green-500 text-white p-2 rounded">Create Split</button>
        </form>
      </div>
    );
  }
  
  export default CreateSplit;
  