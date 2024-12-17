//COVERAGE_TAG: POST /booking/

const { test, expect } = require("@playwright/test");
const { createConnectionBody } = require("../../../src/api/connection");
const { createCompany, createCompanyPayload } = require("../../../src/api/company");

// import { createRoom } from "@datafactory/room";
// import { validateJsonSchema } from "@helpers/validateJsonSchema";
// import { validateAgainstSchema } from "@helpers/validateAgainstSchema";

test.describe("connection/ POST requests @connection", async () => {
    let requestBody;
    let id;

    test.beforeEach(async () => {
        const company1 = {};
        const protocol = "directory";
        const connectionData = {};
        const propertyData = {};

        const company = await createCompany();
        // id = company.id;

        // const futureCheckinDate = await futureOpenCheckinDate(roomId);
        // const checkInString = futureCheckinDate.toISOString().split("T")[0];
        // const checkOutString = stringDateByDays(futureCheckinDate, 2);

        requestBody = await createConnectionBody(company, protocol, connectionData, propertyData);
    });

    test("POST new connection with full body @happy", async ({ request }) => {
        // const response = await request.post("booking/", {
        //   data: requestBody,
        console.log(requestBody);
    });

    // if 409 is returned, it means the room is already booked for the dates, will refactor to create a new room to book so we don't get these conflicts
    // expect(response.status()).toBe(201);

    // const body = await response.json();
    // expect(body.bookingid).toBeGreaterThan(1);

    // const booking = body.booking;
    // expect(booking.bookingid).toBe(body.bookingid);
    // expect(booking.roomid).toBe(requestBody.roomid);
    // expect(booking.firstname).toBe(requestBody.firstname);
    // expect(booking.lastname).toBe(requestBody.lastname);
    // expect(booking.depositpaid).toBe(requestBody.depositpaid);

    // const bookingdates = booking.bookingdates;
    // expect(bookingdates.checkin).toBe(requestBody.bookingdates.checkin);
    // expect(bookingdates.checkout).toBe(requestBody.bookingdates.checkout);

    // await validateJsonSchema("POST_booking", "booking", body);
    // await validateAgainstSchema(booking, "Booking", "booking", ["email", "phone"]);
    // await validateAgainstSchema(booking.bookingdates, "BookingDates", "booking");
    //   });
});
