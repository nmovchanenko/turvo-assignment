To run tests:

npm install
protractor protractor.config.js


Test cases
------------
SMOKE
------------
    Flights
        1. Open Flight form
        2. Pick any valid dates
        3. Fill out "from" and "to" fileds
        4. click Search
        Expected: New record added to "Previous Searches" block. Record contains entered dates and "from"-"to" values

    Cars
        1. Open Cars form
        2. Pick any valid dates
        3. Select any "Amenities" value
        4. Enter any "Location"
        5. click Search
        Expected: New record added to "Previous Searches" block. Record contains entered dates, "Amenities" and "Location" values

    Hotels
        1. Open Hotels form
        2. Pick any valid dates
        3. Select any "Amenities" value
        4. Enter any "Location"
        5. click Search
        Expected: New record added to "Previous Searches" block. Record contains entered dates, stars amount and "Location" values

------------
MAT
------------





------------
AT
------------
