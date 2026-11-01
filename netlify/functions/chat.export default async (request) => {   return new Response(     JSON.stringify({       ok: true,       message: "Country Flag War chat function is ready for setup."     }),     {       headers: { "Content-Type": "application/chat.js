export default async (request) => {
  return new Response(
    JSON.stringify({
      ok: true,
      message: "Country Flag War chat function is ready for setup."
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
