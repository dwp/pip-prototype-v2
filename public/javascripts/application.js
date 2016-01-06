(function () {
  "use strict";
  var root = this,
      $ = root.jQuery;

  if (typeof GOVUK === 'undefined') { root.GOVUK = {}; }

  var SelectionButtons = function (elmsOrSelector, opts) {
    var $elms;

    this.selectedClass = 'selected';
    this.focusedClass = 'focused';
    if (opts !== undefined) {
      $.each(opts, function (optionName, optionObj) {
        this[optionName] = optionObj;
      }.bind(this));
    }
    if (typeof elmsOrSelector === 'string') {
      $elms = $(elmsOrSelector);
      this.selector = elmsOrSelector;
      this.setInitialState($(this.selector));
    } else {
      this.$elms = elmsOrSelector;
      this.setInitialState(this.$elms);
    }
    this.addEvents();
  };
  SelectionButtons.prototype.addEvents = function () {
    if (typeof this.$elms !== 'undefined') {
      this.addElementLevelEvents();
    } else {
      this.addDocumentLevelEvents();
    }
  };
  SelectionButtons.prototype.setInitialState = function ($elms) {
    $elms.each(function (idx, elm) {
      var $elm = $(elm);

      if ($elm.is(':checked')) {
        this.markSelected($elm);
      }
    }.bind(this));
  };
  SelectionButtons.prototype.markFocused = function ($elm, state) {
    if (state === 'focused') {
      $elm.parent('label').addClass(this.focusedClass);
    } else {
      $elm.parent('label').removeClass(this.focusedClass);
    }
  };
  SelectionButtons.prototype.markSelected = function ($elm) {
    var radioName;

    if ($elm.attr('type') === 'radio') {
      radioName = $elm.attr('name');
      $($elm[0].form).find('input[name="' + radioName + '"]')
        .parent('label')
        .removeClass(this.selectedClass);
      $elm.parent('label').addClass(this.selectedClass);
    } else { // checkbox
      if ($elm.is(':checked')) {
        $elm.parent('label').addClass(this.selectedClass);
      } else {
        $elm.parent('label').removeClass(this.selectedClass);
      }
    }
  };
  SelectionButtons.prototype.addElementLevelEvents = function () {
    this.clickHandler = this.getClickHandler();
    this.focusHandler = this.getFocusHandler({ 'level' : 'element' });

    this.$elms
      .on('click', this.clickHandler)
      .on('focus blur', this.focusHandler);
  };
  SelectionButtons.prototype.addDocumentLevelEvents = function () {
    this.clickHandler = this.getClickHandler();
    this.focusHandler = this.getFocusHandler({ 'level' : 'document' });

    $(document)
      .on('click', this.selector, this.clickHandler)
      .on('focus blur', this.selector, this.focusHandler);
  };
  SelectionButtons.prototype.getClickHandler = function () {
    return function (e) {
      this.markSelected($(e.target));
    }.bind(this);
  };
  SelectionButtons.prototype.getFocusHandler = function (opts) {
    var focusEvent = (opts.level === 'document') ? 'focusin' : 'focus';

    return function (e) {
      var state = (e.type === focusEvent) ? 'focused' : 'blurred';

      this.markFocused($(e.target), state);
    }.bind(this);
  };
  SelectionButtons.prototype.destroy = function () {
    if (typeof this.selector !== 'undefined') {
      $(document)
        .off('click', this.selector, this.clickHandler)
        .off('focus blur', this.selector, this.focusHandler);
    } else {
      this.$elms
        .off('click', this.clickHandler)
        .off('focus blur', this.focusHandler);
    }
  };

  root.GOVUK.SelectionButtons = SelectionButtons;
}).call(this);

$.fn.checkboxNone = function(options) {
	var settings = $.extend({
		textarea: false
	}, options );

    $(this).click(function() {
    	if($(this).data('none')) {
			$(":checkbox:checked").each(function() {
				if(!$(this).data('none')){
					if(settings.textarea) {
						$(this).attr('checked', false)
						.parent().removeClass('selected')
						.next().hide();
						$('.special-aids textarea').not( "#otherSpecialEquipment" ).prop("disabled", true )
					} else {
						$(this).attr('checked', false)
						.parent().removeClass('selected');

						$('#other-box:visible').hide()
						.find('input').prop("disabled", true );
					}
				}
			})
    	} else {
    		$(":checkbox:checked").each(function() {
    			if($(this).data('none')){
    				$(this).attr('checked', false).parent().removeClass('selected');
				}
    		});
    		if(settings.textarea) {
    			$('.special-aids textarea').not( "#otherSpecialEquipment" ).prop("disabled", false )
    		} else {
    			$('#other-box:visible').find('input').prop("disabled", false )
    		}
		}
    })
};
function ShowHideContent() {
  var self = this;
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
          $radio.closest('form').find(".block-label input[name=" + $radioGroupName + "]").each(function () {
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
          $(".block-label input[name=" + $radioGroupName + "]").each(function () {

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

  // Turn off jQuery animation
  jQuery.fx.off = true;

  // Use GOV.UK selection-buttons.js to set selected
  // and focused states for block labels
  var $blockLabels = $(".block-label input[type='radio'], .block-label input[type='checkbox']");
  new GOVUK.SelectionButtons($blockLabels);

  // Details/summary polyfill
  // See /javascripts/vendor/details.polyfill.js

  // Where .block-label uses the data-target attribute
  // to toggle hidden content
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

});
