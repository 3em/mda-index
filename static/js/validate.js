jQuery(function($) {

  $("#id-form-trial").validate({
    errorClass: "invalid",
    validClass: "vld",
    errorElement: "span",
    submitHandler: function() {
      var self = $("#id-form-trial");
	  $('.subscribe_box .send-overlay').show(0);

      $.post(self.closest('form').attr("action"), self.closest('form').serialize())
          .done(function (data) {
				setTimeout(function() { 
				  $('.subscribe_box .send-overlay').hide(0);
        	      var fname = self.attr('data-form-id');
                  if (data == 'ok') {
                      //var newurl = window.location.href.replace(/\?.*/, '') + '?course='+self.find("INPUT[name=formid]").val();
                      var newurl = '/course_confirm.php?course='+self.find("INPUT[name=formid]").val();
                      $(fname).find('.success-message').show().after('<iframe src="'+newurl+'" frameborder=0 width=0 height=0></iframe>');
                  fbq ('track', 'CompleteRegistration', {content_name: 'MSK'});
                  } else {
                      $(fname).find('.error-message').show();
                  }
	              $(fname).find('form').remove();

				  social.click_button(".btn-vk");
				  social.click_button(".btn-fb");
				  social.vk_count(".btn-vk");
				  social.fb_count(".btn-fb");

				}, 2000);
      });
      self.closest('form').trigger('reset');
    },
    rules: {
      username: {
        required: true,
        regex: /^[A-Za-zА-Яа-я\s\.\,]{1,200}$/
      },
      phone: {
        required: true,
        minlength: 6,
        maxlength: 15,
        regex: /^([0-9\+\-\(\)\{\}\[\]])+$/
      },
      email: {
        required: true,
//        regex: /^[A-Za-zА-Яа-я¸¨0-9](([_\.\-]?[a-zA-ZА-Яа-я¸¨0-9]+)*)@([A-Za-zА-Яа-я¸¨0-9]+)(([\.\-]?[a-zA-ZА-Яа-я¸¨0-9]+)*)\.([A-Za-zА-Яа-я¸¨])+$/,
        regex: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
        email: true
      }
    },
    messages: {
      username: {
        required: "Введите ваше имя",
        regex: "Некорректный ввод"
      },
      phone: {
        required: "Введите номер телефона",
        minlength: "Менее 6 символов",
        maxlength: "Более 15 символов",
        regex: "Некорректный ввод"
      },
      email: {
        required: "Введите E-mail",
        regex: "Неправильно введен E-mail",
        email: "Неправильно введен E-mail"
      }
    }
  });

  $("#id-form-trial2").validate({
    errorClass: "invalid",
    validClass: "vld",
    errorElement: "span",
    submitHandler: function() {
      var self = $("#id-form-trial2");
	  $('.subscribe_box .send-overlay').show(0);

      $.post(self.closest('form').attr("action"), self.closest('form').serialize())
          .done(function (data) {
				setTimeout(function() { 
				  $('.subscribe_box .send-overlay').hide(0);
        	      var fname = self.attr('data-form-id');
                  if (data == 'ok') {
                      var newurl = '/course_confirm.php?course='+self.find("INPUT[name=formid]").val();
                      $(fname).find('.success-message').show().after('<iframe src="'+newurl+'" frameborder=0 width=0 height=0></iframe>');
                    fbq ('track', 'CompleteRegistration', {content_name: 'ONLINE'});
                  } else {
                      $(fname).find('.error-message').show();
                  }
	              $(fname).find('form').remove();

				  social.click_button(".btn-vk");
				  social.click_button(".btn-fb");
				  social.vk_count(".btn-vk");
				  social.fb_count(".btn-fb");

				}, 2000);
      });
      self.closest('form').trigger('reset');
    },
    rules: {
      username: {
        required: true,
        regex: /^[A-Za-zА-Яа-я\s\.\,]{1,200}$/
      },
      phone: {
        required: true,
        minlength: 6,
        maxlength: 15,
        regex: /^([0-9\+\-\(\)\{\}\[\]])+$/
      },
      email: {
        required: true,
//        regex: /^[A-Za-zА-Яа-я¸¨0-9](([_\.\-]?[a-zA-ZА-Яа-я¸¨0-9]+)*)@([A-Za-zА-Яа-я¸¨0-9]+)(([\.\-]?[a-zA-ZА-Яа-я¸¨0-9]+)*)\.([A-Za-zА-Яа-я¸¨])+$/,
        regex: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
        email: true
      }
    },
    messages: {
      username: {
        required: "Введите ваше имя",
        regex: "Некорректный ввод"
      },
      phone: {
        required: "Введите номер телефона",
        minlength: "Менее 6 символов",
        maxlength: "Более 15 символов",
        regex: "Некорректный ввод"
      },
      email: {
        required: "Введите E-mail",
        regex: "Неправильно введен E-mail",
        email: "Неправильно введен E-mail"
      }
    }
  });

  $("#id-form-trial3").validate({
    errorClass: "invalid",
    validClass: "vld",
    errorElement: "span",
    submitHandler: function() {
      var self = $("#id-form-trial3");
      $('.subscribe_box .send-overlay').show(0);

      $.post(self.closest('form').attr("action"), self.closest('form').serialize())
        .done(function (data) {
          setTimeout(function() {
            $('.subscribe_box .send-overlay').hide(0);
            var fname = self.attr('data-form-id');
            if (data == 'ok') {
              var newurl = '/course_confirm.php?course='+self.find("INPUT[name=formid]").val();
              $(fname).find('.success-message').show().after('<iframe src="'+newurl+'" frameborder=0 width=0 height=0></iframe>');
              fbq ('track', 'CompleteRegistration', {content_name: 'SPB'});
            } else {
              $(fname).find('.error-message').show();
            }
            $(fname).find('form').remove();

            social.click_button(".btn-vk");
            social.click_button(".btn-fb");
            social.vk_count(".btn-vk");
            social.fb_count(".btn-fb");

          }, 2000);
        });
      self.closest('form').trigger('reset');
    },
    rules: {
      username: {
        required: true,
        regex: /^[A-Za-zА-Яа-я\s\.\,]{1,200}$/
      },
      phone: {
        required: true,
        minlength: 6,
        maxlength: 15,
        regex: /^([0-9\+\-\(\)\{\}\[\]])+$/
      },
      email: {
        required: true,
//        regex: /^[A-Za-zА-Яа-я¸¨0-9](([_\.\-]?[a-zA-ZА-Яа-я¸¨0-9]+)*)@([A-Za-zА-Яа-я¸¨0-9]+)(([\.\-]?[a-zA-ZА-Яа-я¸¨0-9]+)*)\.([A-Za-zА-Яа-я¸¨])+$/,
        regex: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
        email: true
      }
    },
    messages: {
      username: {
        required: "Введите ваше имя",
        regex: "Некорректный ввод"
      },
      phone: {
        required: "Введите номер телефона",
        minlength: "Менее 6 символов",
        maxlength: "Более 15 символов",
        regex: "Некорректный ввод"
      },
      email: {
        required: "Введите E-mail",
        regex: "Неправильно введен E-mail",
        email: "Неправильно введен E-mail"
      }
    }
  });

  $("#id-form-payment").validate({
    errorClass: "invalid",
    validClass: "vld",
    errorElement: "span",
    ignore: ":hidden, INPUT[name=code]",
    submitHandler: function() {
      var self = $("#id-form-payment");
      $.post(self.closest('form').attr("action"), self.closest('form').serialize())
          .done(function (data) {
              //var fname = self.attr('data-form-id');
              //$(fname).find('.success-message').show(0)
              //$(fname).find('form').remove();
              var block = self.closest('form').find(".rght");
              self.closest('form').children().unwrap("FORM");
              block.html(data);
          });
      self.closest('form').trigger('reset');
    },
    rules: {
      username: {
        required: true,
        regex: /^[A-Za-zА-Яа-я\s\.\,]{1,200}$/
      },
      name: {
        required: true
      },
      phone: {
        required: true,
        minlength: 6,
        maxlength: 15,
        regex: /^([0-9\+\-\(\)\{\}\[\]])+$/
      },
      email: {
        required: true,
//        regex: /^[A-Za-zА-Яа-я¸¨0-9](([_\.\-]?[a-zA-ZА-Яа-я¸¨0-9]+)*)@([A-Za-zА-Яа-я¸¨0-9]+)(([\.\-]?[a-zA-ZА-Яа-я¸¨0-9]+)*)\.([A-Za-zА-Яа-я¸¨])+$/,
        regex: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
        email: true
      }
    },
    messages: {
      username: {
        required: "Введите ваше имя",
        regex: "Некорректный ввод"
      },
      phone: {
        required: "Введите номер телефона",
        minlength: "Менее 6 символов",
        maxlength: "Более 15 символов",
        regex: "Некорректный ввод"
      },
      email: {
        required: "Введите E-mail",
        regex: "Неправильно введен E-mail",
        email: "Неправильно введен E-mail"
      }
    }
  });



  $("[name=name]").on("change keyup", function() {
    var _str = $(this).val();
    var regex = /[^A-Za-zА-Яа-я\s\.\,]/g;
    if (regex.exec(_str[_str.length-1])) {
      _str = _str.substr(0, _str.length-1);
      $(this).val(_str);
    } else if (_str.length > 200) {
      _str = _str.substr(0, 199);
      $(this).val(_str);
    }
  });

  $("[name=phone]").on("change keyup", function() {
    var _str = $(this).val();
    var regex = /[^0-9\+\-\(\)\{\}\[\]]/g;
    if (regex.exec(_str[_str.length-1])) {
      _str = _str.substr(0, _str.length-1);
      $(this).val(_str);
    } else if (_str.substr(0,1) == "8") {
      _str = "+7" + _str.substr(1);
      $(this).val(_str);
    }
  });

  $("[name=email]").on("change keyup", function() {
    var _str = $(this).val();
    var regex = /[^A-Za-z0-9\.\@\-\_]/g;
    if (regex.exec(_str[_str.length-1])) {
      _str = _str.substr(0, _str.length-1);
      $(this).val(_str);
    }
  });

  $.validator.addMethod("regex", function(value, element, regexp) {
    var re = new RegExp(regexp);
    return this.optional(element) || re.test(value);
  }, "Please check your input.");

});
