var webInquiriesHasLoaded = false;

function checkIfWebInquiriesHasLoaded() {
    if (webInquiriesHasLoaded === false) {
        if ($('#x_element_page_8_6 .af-card-component').html() !== undefined) {
            webInquiriesHasLoaded = true;
            console.log("not")
        }
        window.setTimeout(checkIfWebInquiriesHasLoaded, 100);
    } else {
        console.log("loaded")
        $('.af-card-component').css('cursor', 'pointer');
        $('#x_element_page_8_5 .af-card-component').on('click', function() {
            $('#x_element_page_8_3 > div.table-responsive > div.filter-tabs > ul > li:nth-child(1) > a').click()
        });
        
        $('#x_element_page_8_6 .af-card-component').on('click', function() {
            $('#x_element_page_8_3 > div.table-responsive > div.filter-tabs > ul > li:nth-child(2) > a').click()
        });
        
        $('#x_element_page_8_7 .af-card-component').on('click', function() {
            $('#x_element_page_8_3 > div.table-responsive > div.filter-tabs > ul > li:nth-child(3) > a').click()
        });
        
        $('#x_element_page_8_8 .af-card-component').on('click', function() {
            $('#x_element_page_8_3 > div.table-responsive > div.filter-tabs > ul > li:nth-child(4) > a').click()
        });
        
        $('#x_element_page_8_9 .af-card-component').on('click', function() {
            $('#x_element_page_8_3 > div.table-responsive > div.filter-tabs > ul > li:nth-child(5) > a').click()
        });

        $('#x_element_page_8_10 .af-card-component').on('click', function() {
            $('#x_element_page_8_3 > div.table-responsive > div.filter-tabs > ul > li:nth-child(6) > a').click()
        });

        $('#x_element_page_8_11 .af-card-component').on('click', function() {
            $('#x_element_page_8_3 > div.table-responsive > div.filter-tabs > ul > li:nth-child(7) > a').click()
        });

        $('#x_element_page_8_12 .af-card-component').on('click', function() {
            $('#x_element_page_8_3 > div.table-responsive > div.filter-tabs > ul > li:nth-child(8) > a').click()
        });
    }
}
checkIfWebInquiriesHasLoaded();