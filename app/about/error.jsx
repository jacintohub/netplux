"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      This ain't loading up: {error.message}
      <button onClick={() => reset()}>Reload</button>
    </div>
  );
}
