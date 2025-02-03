import { getBookedDatesByCabinId, getCabin } from "../../../_lib/data-service";

export async function GET(request, { params }) {
  const { cabinId } = params;
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookedDates });
  } catch (error) {
    console.error(error);
    return Response.status(500).json({ error: "Server Error" });
  }
}
// export async function POST() {}
