export function ShortlinkForm() {
  return (
    <form action="/links" method="POST" className="space-y-6">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Long URL</span>
        </label>
        <input
          type="url"
          name="longUrl"
          required
          placeholder="https://example.com/your-long-url"
          className="input input-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Create Shortlink
      </button>
    </form>
  );
}
