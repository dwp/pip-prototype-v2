function ShowHideContent() {
    var self = this;

    self.escapeElementName = function(str) {
        result = str.replace('[', '\\[').replace(']', '\\]')
        return (result);
    };

    self.showHideRadioToggledContent = function() {
        $(".block-label input[type='radio']").each(function() {

            var $radio = $(this);
            var $radioGroupName = $radio.attr('name');
            var $radioLabel = $radio.parent('label');

            var dataTarget = $radioLabel.attr('data-target');

            // Add ARIA attributes

            // If the data-target attribute is defined
            if (dataTarget) {

                // Set aria-controls
                $radio.attr('aria-controls', dataTarget);

                $radio.on('click', function() {

                    // Select radio buttons in the same group
                    $radio.closest('form').find(".block-label input[name=" + self.escapeElementName($radioGroupName) + "]").each(function() {
                        var $this = $(this);

                        var groupDataTarget = $this.parent('label').attr('data-target');
                        var $groupDataTarget = $('#' + groupDataTarget);

                        // Hide toggled content
                        $groupDataTarget.hide();
                        // Set aria-expanded and aria-hidden for hidden content
                        $this.attr('aria-expanded', 'false');
                        $groupDataTarget.attr('aria-hidden', 'true');
                    });

                    var $dataTarget = $('#' + dataTarget);
                    $dataTarget.show();
                    // Set aria-expanded and aria-hidden for clicked radio
                    $radio.attr('aria-expanded', 'true');
                    $dataTarget.attr('aria-hidden', 'false');

                });

            } else {
                // If the data-target attribute is undefined for a radio button,
                // hide visible data-target content for radio buttons in the same group

                $radio.on('click', function() {

                    // Select radio buttons in the same group
                    $(".block-label input[name=" + self.escapeElementName($radioGroupName) + "]").each(function() {

                        var groupDataTarget = $(this).parent('label').attr('data-target');
                        var $groupDataTarget = $('#' + groupDataTarget);

                        // Hide toggled content
                        $groupDataTarget.hide();
                        // Set aria-expanded and aria-hidden for hidden content
                        $(this).attr('aria-expanded', 'false');
                        $groupDataTarget.attr('aria-hidden', 'true');
                    });

                });
            }

        });
    }
    self.showHideCheckboxToggledContent = function() {

        $(".block-label input[type='checkbox']").each(function() {

            var $checkbox = $(this);
            var $checkboxLabel = $(this).parent();

            var $dataTarget = $checkboxLabel.attr('data-target');

            // Add ARIA attributes

            // If the data-target attribute is defined
            if (typeof $dataTarget !== 'undefined' && $dataTarget !== false) {

                // Set aria-controls
                $checkbox.attr('aria-controls', $dataTarget);

                // Set aria-expanded and aria-hidden
                $checkbox.attr('aria-expanded', 'false');
                $('#' + $dataTarget).attr('aria-hidden', 'true');

                // For checkboxes revealing hidden content
                $checkbox.on('click', function() {

                    var state = $(this).attr('aria-expanded') === 'false' ? true : false;

                    // Toggle hidden content
                    $('#' + $dataTarget).toggle();

                    // Update aria-expanded and aria-hidden attributes
                    $(this).attr('aria-expanded', state);
                    $('#' + $dataTarget).attr('aria-hidden', !state);

                });
            }

        });
    }
}

$(document).ready(function() {

    // Use GOV.UK selection-buttons.js to set selected
    // and focused states for block labels
    var $blockLabels = $(".block-label input[type='radio'], .block-label input[type='checkbox']");
    new GOVUK.SelectionButtons($blockLabels);

    // Show and hide toggled content
    // Where .block-label uses the data-target attribute
    var toggleContent = new ShowHideContent();
    toggleContent.showHideRadioToggledContent();
    toggleContent.showHideCheckboxToggledContent();
    /*******************************
    Prototype pip 14
    ********************************/
    $(".add-another").click(function() {
        var dataTarget = $(this).attr('data-target');
        $("li." + dataTarget + ".js-hidden").first().removeClass('js-hidden');

        if ($("li." + dataTarget + ".js-hidden").length === 0) {
            $(this).addClass('js-hidden');
        }
        return false;
    });

    $('.remove').click(function() {
        $(this).parent().addClass("js-hidden");
        return false;
    });

    $('.check-uncheck input[type="checkbox"], .check-uncheck input[type="radio"]').click(function() {
        var show = $(this).parent().data('show'),
            hide = $(this).parent().data('hide');
        if (hide) {
            $('#' + hide).hide();
            $('.check-uncheck :checkbox:checked').each(function() {
                if ($(this).parent().data('show')) {

                    $(this).attr('checked', false).parent().removeClass('selected');
                    if ($(this).parent().attr('data-target')) {
                        $(this).parent().next().hide();
                    }
                }
            });
        } else {
            $('#' + show).show();
            $('.check-uncheck :checkbox:checked').each(function() {
                if ($(this).parent().data('hide')) {
                    $(this).attr('checked', false).parent().removeClass('selected');
                }
            });
        }
    });

    function charCount(textarea) {
        var max = textarea.attr('maxLength'),
            left = textarea.val().length;
        textarea.next('span').text(max - left + ' characters left');
    }

    $('textarea').each(function() {
        charCount($(this));
        if ($(this).attr('maxLength')) {
            $(this).keyup(function() {
                charCount($(this));
            });
        }
    });

    $('.showLegal').click(function() {
        $('#legalDetails').toggle();
    });


    $("input[name='manageNow']").click(function() {
        var helptext = $(this).data("helptext"),
            helptext2 = $(this).data("helptext2"),
            id = $(this).attr("id");

        if (helptext) {
            if ($(this).is(':checked')) {
                if ($('li#howOften-list').length) {
                    $('<li id="' + id + '" class="helptextListItem" data-number="' + id + '">' + helptext + '</li>').insertBefore($("li#howOften-list"));
                    if (helptext2) {
                        $('<li id="' + id + '" class="helptextListItem" data-number="' + id + '-2">' + helptext2 + '</li>').insertBefore($("li#howOften-list"));
                    }
                } else {
                    $('#explain-how').prepend('<li id="' + id + '" class="helptextListItem" data-number=" ' + id + '">' + helptext + '</li>')
                    if (helptext2) {
                        $('#explain-how').prepend('<li id="' + id + '-2" class="helptextListItem" data-number=" ' + id + '">' + helptext2 + '</li>')
                    }
                }
            } else {
                $('li#' + id + ', li#' + id + '-2').remove();
            }
            $(".helptextListItem").sort(function(a, b) {
                return a.id < b.id;
            }).each(function() {
                var elem = $(this);
                elem.remove();
                $(elem).prependTo("#explain-how");
            });
        }
    });

    $("input[name='howOften'], input[name='frequencyOption']").click(function() {
        var dayshelptext = $('#howOften').data('dayshelptext'),
            freqhelptext = $('#howOften').data('freqhelptext');
        if (dayshelptext || freqhelptext) {
            if ($(this).val() !== $('#howOften input[name="howOften"]:first').val()) {
                $('li.howOften-listitem').remove();
                if ($('.helptextListItem').length) {
                    $('.helptextListItem:last').append('<li class="howOften-listitem">' + freqhelptext + '</li>')
                    $('.helptextListItem:last').append('<li id="dayshelptext" class="howOften-listitem">' + dayshelptext + '</li>')
                } else {
                    $('#explain-how').prepend('<li class="howOften-listitem">' + freqhelptext + '</li>')
                    $('#explain-how').prepend('<li id="dayshelptext" class="howOften-listitem">' + dayshelptext + '</li>')
                }
                if ($(this).val() === $('#howOften input[name="howOften"]:last').val()) {
                    $('#dayshelptext').remove();
                }
            } else {
                $('li.howOften-listitem').remove();
            }
        };
    })

    $(".form-declaration").submit(function(e) {
        $('input[type="checkbox"]').each(function() {
            if ($(this).is(':checked') === false) {
                $('#error-msg').removeClass('js-hidden')
                $("html, body").animate({
                    scrollTop: 0
                });
                e.preventDefault();
            }
        })
    });


    var substringMatcher = function(strs) {
        return function findMatches(q, cb) {
            var matches = [];
            var substrRegex = new RegExp(q, 'i');
            $.each(strs, function(i, str) {
                if (substrRegex.test(str)) {
                    matches.push(str);
                }
            });
            cb(matches);
        };
    };
    var nationality = [
        "Austrian",
        "Belgian",
        "Bulgarian",
        "British",
        "Croatian",
        "Republic of Cyprus",
        "Channel Islands",
        "Czech Republic",
        "Danish",
        "English",
        "Estonian",
        "Finnish",
        "French",
        "Guernsey (Channel Islands)",
        "German",
        "Greek",
        "Hungarian",
        "Irish",
        "Italian",
        "Jersey (Channel Islands)",
        "Latvian",
        "Lithuanian",
        "Luxembourg",
        "Maltese",
        "Dutch (Netherlands)",
        "Poland",
        "Portuese",
        "Romanian",
        "Scottish",
        "Slovakian",
        "Slovenian",
        "Spanish",
        "Swedish",
        "Icelandic",
        "Liechtensteinian",
        "Norwegian",
        "Swiss",
        "UK",
        "United Kingdom",
    ];
    var country = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

    $('.pip21 .form-nationality #nationality').typeahead({
        "hint": true,
        "highlight": true,
        "minLength": 1
    }, {
        name: 'nationality',
        source: substringMatcher(nationality)
    });

    $('.pip21 .form-nationality #countryLiving').typeahead({
        "hint": true,
        "highlight": true,
        "minLength": 1
    }, {
        name: 'nationality',
        source: substringMatcher(country)
    });

  

});
