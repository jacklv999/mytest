"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
	jTippy
	https://github.com/HTMLGuyLLC/jTippy
	Made with love by HTMLGuy, LLC
	https://htmlguy.com
	MIT Licensed
*/
;

(function ($) {
  $.fn.jTippy = function (options) {
    if (this.length > 1) {
      this.each(function () {
        $(this).jTippy(options);
      });
      return this;
    }

    if (typeof this === 'undefined' || this.length !== 1) {
      return false;
    }

    var dom_wrapped = $(this);
    options = $.extend({}, $.jTippy.defaults, options, dom_wrapped.data());
    var title = dom_wrapped.attr('title');

    if (typeof title !== 'undefined' && title.length) {
      options.title = title;
    }

    options["class"] += ' jt-' + options.theme + '-theme';
    options["class"] += ' jt-' + options.size;

    if (options.trigger !== 'click') {
      options.backdrop = false;
    }

    options.trigger = options.trigger.toLowerCase().trim();
    var helper = {
      dom: this,
      dom_wrapped: dom_wrapped,
      position_debug: options.position_debug,
      trigger: options.trigger,
      title: options.title,
      theme: options.theme,
      "class": options["class"],
      backdrop: options.backdrop,
      position: options.position,
      close_on_outside_click: options.close_on_outside_click,
      singleton: options.singleton,
      dataAttr: 'jTippy',
      createTooltipHTML: function createTooltipHTML() {
        return "<div class='jtippy ".concat(helper["class"], "'role='tooltip'><div class='jt-arrow'></div><div class='jt-title'>").concat(helper.title, "</div></div>");
      },
      createBackdropHTML: function createBackdropHTML() {
        return helper.backdrop ? "<div class='jt-backdrop jt-".concat(helper.backdrop, "-backdrop'></div>") : false;
      },
      destroy: function destroy() {
        var existing = helper.dom_wrapped.data(helper.dataAttr);

        if (typeof existing !== 'undefined' && existing !== null) {
          if (existing.trigger === 'click') {
            existing.dom_wrapped.off('touchstart mousedown', existing.toggleTooltipHandler);
            existing.dom_wrapped.off('click', existing.preventDefaultHandler);
          } else if (existing.trigger === 'focus') {
            existing.dom_wrapped.off('touchstart focus', existing.show);
            existing.dom_wrapped.off('touchend blur', existing.hide);
          } else if (existing.trigger === 'hover') {
            existing.dom_wrapped.off('touchstart mouseenter', existing.show);
            existing.dom_wrapped.off('touchend mouseleave', existing.hide);
          } else if (existing.trigger === 'hoverfocus') {
            existing.dom_wrapped.off('focus', existing.hoverfocusFocusShow);
            existing.dom_wrapped.off('blur', existing.hoverfocusBlur);
            existing.dom_wrapped.off('touchstart mouseenter', existing.show);
            existing.dom_wrapped.off('touchend mouseleave', existing.hoverfocusHide);
          }

          $(window).off('resize', existing.onResize);
          existing.isVisible() && existing.hide();
          existing.dom_wrapped.data(existing.dataAttr, null);
        }
      },
      initialize: function initialize() {
        if (helper.trigger === 'click') {
          helper.dom_wrapped.on('touchstart mousedown', helper.toggleTooltipHandler);
          helper.dom_wrapped.on('click', helper.preventDefaultHandler);
        } else if (helper.trigger === 'focus') {
          helper.dom_wrapped.on('touchstart focus', helper.show);
          helper.dom_wrapped.on('touchend blur', helper.hide);
        } else if (helper.trigger === 'hover') {
          helper.dom_wrapped.on('touchstart mouseenter', helper.show);
          helper.dom_wrapped.on('touchend mouseleave', helper.hide);
        } else if (helper.trigger === 'hoverfocus') {
          helper.dom_wrapped.on('focus', helper.hoverfocusFocusShow);
          helper.dom_wrapped.on('blur', helper.hoverfocusBlur);
          helper.dom_wrapped.on('touchstart mouseenter', helper.show);
          helper.dom_wrapped.on('touchend mouseleave', helper.hoverfocusHide);
        }

        if (helper.trigger !== 'click') {
          helper.dom_wrapped.on('touchstart mousedown', helper.hide);
        }

        if (!$.jTippy.body_click_initialized) {
          $(document).on('touchstart mousedown', helper.onClickOutside);
          $.jTippy.bodyClickInitialized = true;
        }

        helper.dom_wrapped.data(helper.dataAttr, helper);
        return helper.dom;
      },
      hoverfocusFocusShow: function hoverfocusFocusShow() {
        helper.dom_wrapped.addClass('jt-focused');
        helper.dom_wrapped.show();
      },
      hoverfocusBlur: function hoverfocusBlur() {
        if (helper.dom_wrapped && helper.dom_wrapped.length) {
          helper.dom_wrapped.removeClass('jt-focused');
        }

        helper.hide();
      },
      hoverfocusHide: function hoverfocusHide() {
        if (helper.dom_wrapped.hasClass('jt-focused')) {
          return false;
        }

        helper.hide();
      },
      preventDefaultHandler: function preventDefaultHandler(e) {
        e.preventDefault();
        return false;
      },
      toggleTooltipHandler: function toggleTooltipHandler(e) {
        e.preventDefault();
        helper.isVisible() && helper.hide() || helper.show();
        return false;
      },
      show: function show(trigger_event) {
        if (helper.isVisible()) {
          return false;
        }

        if (helper.singleton) {
          helper.hideAllVisible();
        }

        var body = $('body');

        if (helper.backdrop === 'blurred') {
          body.addClass('jt-blurred-body');
        } else if (helper.backdrop) {
          body.append(helper.createBackdropHTML());
        }

        body.append(helper.createTooltipHTML());
        helper.tooltip = $('.jtippy:last');
        helper.positionTooltip();
        $(window).on('resize', helper.onResize);
        var id = 'jTippy' + Date.now();
        helper.tooltip.attr('id', id);
        helper.dom.attr('aria-describedby', id);
        $.jTippy.visible.push(helper);

        if (typeof trigger_event === 'undefined' || trigger_event) {
          helper.dom.trigger('jt-show', {
            'tooltip': helper.tooltip
          });
        }
      },
      isVisible: function isVisible() {
        return $.inArray(helper, $.jTippy.visible) > -1;
      },
      hideAllVisible: function hideAllVisible() {
        $.each($.jTippy.visible, function (index, jTippy) {
          jTippy.hide();
        });
        return this;
      },
      hide: function hide(trigger_event) {
        $(window).off('resize', helper.onResize);
        helper.dom.attr('aria-describedby', null);

        if (helper.tooltip && helper.tooltip.length) {
          helper.tooltip.remove();
        }

        if (helper.backdrop === 'blurred') {
          $('body').removeClass('jt-blurred-body');
        } else if (helper.backdrop) {
          $('.jt-backdrop').remove();
        }

        if (typeof trigger_event === 'undefined' || trigger_event) {
          helper.dom.trigger('jt-hide');
        }

        if (helper.trigger !== 'click') {
          helper.dom_wrapped.off('touchstart mousedown', helper.hide);
        }

        var index = $.inArray(helper, $.jTippy.visible);
        $.jTippy.visible.splice(index, 1);
        return helper.dom;
      },
      onResize: function onResize() {
        helper.hide(false);
        helper.show(false);
      },
      onClickOutside: function onClickOutside(e) {
        var target = $(e.target);

        if (!target.hasClass('jtippy') && !target.parents('.jtippy:first').length) {
          $.each($.jTippy.visible, function (index, helper) {
            if (typeof helper !== 'undefined') {
              if (helper.trigger === 'click' && helper.close_on_outside_click) {
                helper.hide();
              }
            }
          });
        }
      },
      positionTooltip: function positionTooltip() {
        helper.positionDebug('-- Start positioning --');
        var arrow = helper.tooltip.find('.jt-arrow');

        var _helper$calculateSafe = helper.calculateSafePosition(helper.position),
            _helper$calculateSafe2 = _slicedToArray(_helper$calculateSafe, 6),
            arrow_dir = _helper$calculateSafe2[0],
            elem_width = _helper$calculateSafe2[1],
            tooltip_width = _helper$calculateSafe2[2],
            tooltip_height = _helper$calculateSafe2[3],
            left = _helper$calculateSafe2[4],
            top = _helper$calculateSafe2[5];

        if (typeof left === 'undefined' && helper.position !== 'auto') {
          helper.positionDebug('Couldn\'t fit preferred position');

          var _helper$calculateSafe3 = helper.calculateSafePosition('auto');

          var _helper$calculateSafe4 = _slicedToArray(_helper$calculateSafe3, 6);

          arrow_dir = _helper$calculateSafe4[0];
          elem_width = _helper$calculateSafe4[1];
          tooltip_width = _helper$calculateSafe4[2];
          tooltip_height = _helper$calculateSafe4[3];
          left = _helper$calculateSafe4[4];
          top = _helper$calculateSafe4[5];
        }

        if (typeof left === 'undefined') {
          helper.positionDebug('Doesn\'t appear to fit. Displaying centered');
          helper.tooltip.addClass('jt-centered').css({
            'top': '50%',
            'left': '50%',
            'margin-left': -(tooltip_width / 2),
            'margin-top': -(tooltip_height / 2)
          });

          if (arrow && arrow.length) {
            arrow.remove();
          }

          helper.positionDebug('-- Done positioning --');
          return;
        }

        helper.positionDebug({
          'Setting Position': {
            'Left': left,
            'Top': top
          }
        });
        helper.tooltip.css('left', left);
        helper.tooltip.css('top', top);

        if (elem_width < 60) {
          helper.positionDebug('Element is less than ' + elem_width + 'px. Setting arrow to hug the side tighter');
          arrow_dir += ' jt-arrow-super-hug';
        }

        arrow.addClass('jt-arrow-' + arrow_dir);
        helper.positionDebug('-- Done positioning --');
        return helper;
      },
      calculateSafePosition: function calculateSafePosition(position) {
        var arrow = helper.tooltip.find('.jt-arrow');
        var elem_position = helper.dom_wrapped.offset();
        var elem_height = helper.dom_wrapped.outerHeight();
        var elem_width = helper.dom_wrapped.outerWidth();
        var tooltip_width = helper.tooltip.outerWidth();
        var tooltip_height = helper.tooltip.outerHeight();
        var window_width = document.querySelector('body').offsetWidth;
        var window_height = document.querySelector('body').offsetHeight;
        var arrow_height = arrow.is(":visible") ? arrow.outerHeight() : 0;
        var arrow_width = arrow.is(":visible") ? arrow.outerWidth() : 0;
        var fits = {};
        fits.below = window_height - (tooltip_height + elem_height + elem_position.top) > 5;
        fits.above = elem_position.top - tooltip_height > 5;
        fits.vertical_half = elem_position.top + elem_width / 2 - tooltip_height / 2 > 5;
        fits.right = window_width - (tooltip_width + elem_width + elem_position.left) > 5;
        fits.right_half = window_width - elem_position.left - elem_width / 2 - tooltip_width / 2 > 5;
        fits.right_full = window_width - elem_position.left - tooltip_width > 5;
        fits.left = elem_position.left - tooltip_width > 5;
        fits.left_half = elem_position.left + elem_width / 2 - tooltip_width / 2 > 5;
        fits.left_full = elem_position.left - tooltip_width > 5;
        helper.positionDebug({
          'Clicked Element': {
            'Left': elem_position.left,
            'Top': elem_position.top
          }
        });
        helper.positionDebug({
          'Element Dimensions': {
            'Height': elem_height,
            'Width': elem_width
          },
          'Tooltip Dimensions': {
            'Height': tooltip_height,
            'Width': tooltip_width
          },
          'Window Dimensions': {
            'Height': window_height,
            'Width': window_width
          },
          'Arrow Dimensions': {
            'Height': arrow_height,
            'Width': arrow_width
          }
        });
        helper.positionDebug(fits);
        var arrow_dir, left, top;

        if ((position === 'auto' || position === 'bottom') && fits.below && fits.left_half && fits.right_half) {
          helper.positionDebug('Displaying below, centered');
          arrow_dir = 'top';
          left = elem_position.left - tooltip_width / 2 + elem_width / 2;
          top = elem_position.top + elem_height + arrow_height / 2;
        } else if ((position === 'auto' || position === 'top') && fits.above && fits.left_half && fits.right_half) {
          helper.positionDebug('Displaying above, centered');
          arrow_dir = 'bottom';
          left = elem_position.left - tooltip_width / 2 + elem_width / 2;
          top = elem_position.top - tooltip_height - arrow_height / 2;
        } else if ((position === 'auto' || position === 'left') && fits.left && fits.vertical_half) {
          helper.positionDebug('Displaying left, centered');
          arrow_dir = 'right';
          left = elem_position.left - tooltip_width - arrow_width / 2;
          top = elem_position.top + elem_height / 2 - tooltip_height / 2;
        } else if ((position === 'auto' || position === 'right') && fits.right && fits.vertical_half) {
          helper.positionDebug('Displaying right, centered');
          arrow_dir = 'left';
          left = elem_position.left + elem_width + arrow_width / 2;
          top = elem_position.top + elem_height / 2 - tooltip_height / 2;
        } else if ((position === 'auto' || position === 'bottom') && fits.below && fits.right_full) {
          helper.positionDebug('Displaying below, to the right');
          arrow_dir = 'top jt-arrow-hug-left';
          left = elem_position.left;
          top = elem_position.top + elem_height + arrow_height / 2;
        } else if ((position === 'auto' || position === 'bottom') && fits.below && fits.left_full) {
          helper.positionDebug('Displaying below, to the left');
          arrow_dir = 'top jt-arrow-hug-right';
          left = elem_position.left + elem_width - tooltip_width;
          top = elem_position.top + elem_height + arrow_height / 2;
        } else if ((position === 'auto' || position === 'top') && fits.above && fits.right_full) {
          helper.positionDebug('Displaying above, to the right');
          arrow_dir = 'bottom jt-arrow-hug-left';
          left = elem_position.left;
          top = elem_position.top - tooltip_height - arrow_height / 2;
        } else if ((position === 'auto' || position === 'top') && fits.above && fits.left_full) {
          helper.positionDebug('Displaying above, to the left');
          arrow_dir = 'bottom jt-arrow-hug-right';
          left = elem_position.left + elem_width - tooltip_width;
          top = elem_position.top - tooltip_height - arrow_height / 2;
        }

        return [arrow_dir, elem_width, tooltip_width, tooltip_height, left, top];
      },
      positionDebug: function positionDebug(msg) {
        if (!helper.position_debug) {
          return false;
        }

        return _typeof(msg) === 'object' ? console.table(msg) : console.log("Position:".concat(msg));
      }
    };
    helper.destroy();
    return helper.initialize();
  };

  $.jTippy = {};
  $.jTippy.visible = [];
  $.jTippy.body_click_initialized = false;
  $.jTippy.defaults = {
    title: '',
    trigger: 'hoverfocus',
    position: 'auto',
    "class": '',
    theme: 'black',
    size: 'small',
    backdrop: false,
    singleton: true,
    close_on_outside_click: true
  };
})(jQuery);