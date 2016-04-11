function ShowHideContent() {
  var self = this;

  self.escapeElementName = function(str) {
    result = str.replace('[', '\\[').replace(']', '\\]')
    return(result);
  };

  self.showHideRadioToggledContent = function () {
    $(".block-label input[type='radio']").each(function () {

      var $radio = $(this);
      var $radioGroupName = $radio.attr('name');
      var $radioLabel = $radio.parent('label');

      var dataTarget = $radioLabel.attr('data-target');

      // Add ARIA attributes

      // If the data-target attribute is defined
      if (dataTarget) {

        // Set aria-controls
        $radio.attr('aria-controls', dataTarget);

        $radio.on('click', function () {

          // Select radio buttons in the same group
          $radio.closest('form').find(".block-label input[name=" + self.escapeElementName($radioGroupName) + "]").each(function () {
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

        $radio.on('click', function () {

          // Select radio buttons in the same group
          $(".block-label input[name=" + self.escapeElementName($radioGroupName) + "]").each(function () {

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
  self.showHideCheckboxToggledContent = function () {

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
        $('#'+$dataTarget).attr('aria-hidden', 'true');

        // For checkboxes revealing hidden content
        $checkbox.on('click', function() {

          var state = $(this).attr('aria-expanded') === 'false' ? true : false;

          // Toggle hidden content
          $('#'+$dataTarget).toggle();

          // Update aria-expanded and aria-hidden attributes
          $(this).attr('aria-expanded', state);
          $('#'+$dataTarget).attr('aria-hidden', !state);

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
		$("li."+dataTarget+".js-hidden").first().removeClass('js-hidden');

    if( $("li."+dataTarget+".js-hidden").length === 0) {
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
				if($(this).parent().data('show')) {
					$(this).attr('checked', false).parent().removeClass('selected');
					if ($(this).parent().attr('data-target')) {
            $(this).parent().next().hide();
          }
				}
			});
		} else {
			$('#' + show).show();
				$('.check-uncheck :checkbox:checked').each(function() {
					if($(this).parent().data('hide')) {
						$(this).attr('checked', false).parent().removeClass('selected');
					}
				});
		}
	});

  function charCount(textarea) {
    var max  = textarea.attr('maxLength'),
        left = textarea.val().length;
    textarea.next('span').text(max - left + ' characters left');
  }

  $('textarea').each(function() {
    charCount($(this));
    if($(this).attr('maxLength')){
  		$(this).keyup(function() {
        charCount($(this));
  		});
    }
	});

  $('.showLegal').click(function(){
    $('#legalDetails').toggle();
  });


  $( "input[name='manageNow']" ).click(function(){
    var test = $(this).data("helptext");
    var id = $(this).attr("id");
    if (test){
      if ($(this).is(':checked')) {
        if($('li#howOften-list').length) {
          $( '<li id="'+id+'" class="testCheckbox" data-number=" ' + id +'">' + test + '</li>' ).insertBefore($("li#howOften-list"));
        } else {
          $('#explain-how').append('<li id="'+id+'" class="testCheckbox" data-number=" ' + id +'">' + test + '</li>')
        }
      } else {
        $('li#' + id ).remove();
      }
      $(".testCheckbox").sort(function (a, b) {
        return a.id > b.id;
      }).each(function () {
          var elem = $(this);
          elem.remove();
          if($('li#howOften-list').length) {
            $(elem).insertBefore($("li#howOften-list"));
          } else {
          $(elem).appendTo("#explain-how");
        }
      });
    }
  });

  $("input[name='howOften']").click(function() {
    if ($(this).val() !== $('#howOften input:first').val()) {
      if ( !$('li#howOften-list').length) {
        $('#explain-how').append('<li id="howOften-list">How often is it? Can you complete the task on the other days or do you still have different difficulties - tell us about them.</li>')
      }
    } else {
      $('li#howOften-list').remove();
    }
  })

});
