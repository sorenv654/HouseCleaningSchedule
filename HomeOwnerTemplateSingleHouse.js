function MarkMcDavis2021() {

    var values = SpreadsheetApp.openById('1VmlCmR5E_BMRW4sV_uZTUfz7cbRyUsxa0FY_m04-RLk').getSheetByName('Sheet1').getRange('A3:L367').getValues();
    var lastDate1 = SpreadsheetApp.openById('1VmlCmR5E_BMRW4sV_uZTUfz7cbRyUsxa0FY_m04-RLk').getSheetByName('Sheet1').getRange('A367:A367').getValue();
  
  
    //--START-- Search for CHECK IN DATES - CHECK IN NOTES - CHECK OUT NOTES - TURN NOTES  --START--//  

    for (i = 0; i < values.length; i++) {
        if (values[i][1] != "" && values[i][9] == "") {



            var checkInDate = (values[i][0]);
            var checkInNotes = (values[i][7]);


            var AllNotes = "In Notes: " + checkInNotes;

            if (values[i][7] != "") {
                CalendarApp.getCalendarById("pskleen.com_bmtaopbl540a34knapg88cps1g@group.calendar.google.com").createAllDayEvent("IN 558 N Hermosa Dr- Notes", checkInDate, { description: AllNotes });
            } else { 
                CalendarApp.getCalendarById("pskleen.com_bmtaopbl540a34knapg88cps1g@group.calendar.google.com").createAllDayEvent("IN 558 N Hermosa Dr ", checkInDate );
            }

        }
    }

    //--START-- Search for CHECK OUT DATES - NEXT CHECK IN DATE - CHECK IN NOTES - CHECK OUT NOTES - TURN NOTES dates  --START--//   

    for (i = 0; i < values.length; i++) {
        if (values[i][3] != "" && values[i][10] == "") {
            for (j = 0; j < (values.length - (i + 1)) && values[i + j][1] == ""; j++) { }


            var checkOutDate = (values[i][0]);
            var nextCheckInDate = (values[i + j][0]);
            var checkOutNotes = (values[i][7]);

            var AllNotes = " Out Notes: " + checkOutNotes;

            var string = nextCheckInDate.toString();
            var split1 = string.split(' ', 3);
            var conc = (split1[1]) + " " + (split1[2]);

            var lastDateString = lastDate1.toString();

            if (string == lastDateString && values[i][7] != "") {
                CalendarApp.getCalendarById("pskleen.com_bmtaopbl540a34knapg88cps1g@group.calendar.google.com").createAllDayEvent("OUT 558 N Hermosa Dr- Notes ", checkOutDate, { description: AllNotes });
            } 
            if (string == lastDateString && values[i][7] == "") {
                CalendarApp.getCalendarById("pskleen.com_bmtaopbl540a34knapg88cps1g@group.calendar.google.com").createAllDayEvent("OUT 558 N Hermosa Dr", checkOutDate);
            }
            if (string != lastDateString && values[i][7] != "") { 
               CalendarApp.getCalendarById("pskleen.com_bmtaopbl540a34knapg88cps1g@group.calendar.google.com").createAllDayEvent("OUT 558 N Hermosa Dr- Notes " + " - " + conc, checkOutDate, { description: AllNotes });
            }
            if (string != lastDateString && values[i][7] == "") { 
                CalendarApp.getCalendarById("pskleen.com_bmtaopbl540a34knapg88cps1g@group.calendar.google.com").createAllDayEvent("OUT 558 N Hermosa Dr" + " - " + conc, checkOutDate);
             }
        }
    }

    //--START-- Search for TURN DATES - CHECK IN NOTES - CHECK OUT NOTES - TURN NOTES dates  --START--//

    for (i = 0; i < values.length; i++) {
        if (values[i][5] != "" && values[i][11] == "") {


            var turnDate = (values[i][0]);
            var turnNotes = (values[i][7]);


            var AllNotes = "Turn Notes: " + turnNotes;

            if (values[i][7] != ""){
                CalendarApp.getCalendarById("pskleen.com_bmtaopbl540a34knapg88cps1g@group.calendar.google.com").createAllDayEvent("TURN 558 N Hermosa Dr- Notes ", turnDate, { description: AllNotes });
            } else { 
                CalendarApp.getCalendarById("pskleen.com_bmtaopbl540a34knapg88cps1g@group.calendar.google.com").createAllDayEvent("TURN 558 N Hermosa Dr", turnDate );
            }

        }
    }



    //--START-- Mark houses whose entries have already been created  --START--//   

    var ss = SpreadsheetApp.openById('1VmlCmR5E_BMRW4sV_uZTUfz7cbRyUsxa0FY_m04-RLk').getSheetByName('Sheet1')
    var markedValues = SpreadsheetApp.openById('1VmlCmR5E_BMRW4sV_uZTUfz7cbRyUsxa0FY_m04-RLk').getSheetByName('Sheet1').getRange('B3:B367').getValues();

    for (i = 0; i < markedValues.length; i++) {

        if (markedValues[i] != "") {
            var cell = i + 3;
            var cell2 = "J" + cell;
            ss.getRange(cell2).setValue("x");
        }
    }

    var markedValues = SpreadsheetApp.openById('1VmlCmR5E_BMRW4sV_uZTUfz7cbRyUsxa0FY_m04-RLk').getSheetByName('Sheet1').getRange('D3:D367').getValues();

    for (i = 0; i < markedValues.length; i++) {
        if (markedValues[i] != "") {
            var cell = i + 3;
            var cell2 = "K" + cell;
            ss.getRange(cell2).setValue("x");
        }
    }

    var markedValues = SpreadsheetApp.openById('1VmlCmR5E_BMRW4sV_uZTUfz7cbRyUsxa0FY_m04-RLk').getSheetByName('Sheet1').getRange('F3:F367').getValues();

    for (i = 0; i < markedValues.length; i++) {
        if (markedValues[i] != "") {
            var cell = i + 3;
            var cell2 = "L" + cell;
            ss.getRange(cell2).setValue("x");
        }
    }



}

