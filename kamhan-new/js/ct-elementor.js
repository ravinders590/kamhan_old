!function(e){var n=function(e,n){setTimeout((function(){n(".elementor > .elementor-element").each((function(){var e=n(this).find(".elementor-container .el-move-parents"),t=n(this).find(".elementor-widget-wrap .el-move-parents");n(this).find("> .elementor-container").before(e.clone()),t.remove()})),n(".elementor-inner-section").each((function(){var e=n(this).find(".elementor-container .el-move-inner"),t=n(this).find(".elementor-widget-wrap .el-move-inner");n(this).find("> .elementor-container").before(e.clone()),t.remove()})),n(".ct-contact-form-layout1.style2 .input-filled").each((function(){var e=n(this).find(".input-icon, label");n(this).find(".wpcf7-form-control").before(e.clone()),e.remove()}))}),200)};e(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/ct_social.default",n),elementorFrontend.hooks.addAction("frontend/element_ready/ct_particle_animate.default",n),elementorFrontend.hooks.addAction("frontend/element_ready/ct_square_animate.default",n),elementorFrontend.hooks.addAction("frontend/element_ready/ct_contact_form.default",n),elementorFrontend.hooks.addAction("frontend/element_ready/ct_text_below.default",n)}))}(jQuery);