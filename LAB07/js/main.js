$(document).ready(function () {
  var sliderColorArray = [
    "rgba(231, 102, 60, 0.75)",
    "rgba(164, 122, 96, 0.75)",
    "rgba(15, 45, 70, 0.75)",
    "rgba(150, 152, 235, 0.75)",
    "rgba(65, 152, 208, 0.75)",
  ];
  var sliderNumArray = [
    "SLIDE ONE",
    "SLIDE TWO",
    "SLIDE THREE",
    "SLIDE FOUR",
    "SLIDE FIVE",
  ];
  var currentIndex = 0;
  var totalImages = $("#slider-container > img").length;
  console.log(totalImages);

  //Show the first image

  function showImage(index) {
    $("#slider-container > img").hide();
    $("#slider-container > img").eq(index).show();
    $("#image-description h2").text(sliderNumArray[index]);
    $("#image-description").css("background-color", sliderColorArray[index]);
  }

  // Autoplay functionality
  var autoplayInterval = setInterval(function () {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  }, 3000); // Change image every 3 seconds (adjust as needed)

  // Function to handle next button click

  $("#slider-right-button").on("click", function () {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  });

  // Function to handle prev button click

  $("#slider-left-button").on("click", function () {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
  });

  // Clear autoplay interval when hovering over gallery

  $("#slider-container").hover(
    function () {
      clearInterval(autoplayInterval);
    },

    function () {
      //kapag wala yung mouse sa gallery container

      // Resume autoplay when mouse leaves the gallery

      autoplayInterval = setInterval(function () {
        currentIndex = (currentIndex + 1) % totalImages;

        showImage(currentIndex);
      }, 3000);
    }
  );

  $("#image-container > img").on("click", function () {
    // Get img's data-img attribute
    var imageURL = $(this).attr("src");
    console.log(imageURL);

    $("#gallery-image-overlay img").attr("src", imageURL);

    // Display the Overlay
    $("#gallery-image-overlay").fadeIn();
    $("#gallery-image-overlay").css("display", "flex");

    // Hide overlay when clicked outside the image
    $("#gallery-image-overlay").on("click", function () {
      $(this).fadeOut();
    });
  });

  $(".recent-works-summary-container").on("click", function () {
    /* SINGLE OPEN */

    // Assign the receiving .accordion-title
    var accordionContent = $(this).next(".recent-works-description-container");

    // Closed other accordion content
    $(".recent-works-description-container").not(accordionContent).slideUp();

    // Toggle only the clicked content
    accordionContent.slideToggle();

  });

  $(".blog-button").on("click", function () {
    /* SINGLE OPEN */

    // Assign the receiving .accordion-title
    var accordionContent = $(this).prev(".blog-box-extra-description");
    if ($(this).text() == "LESS") $(this).text("MORE");
    else $(this).text("LESS");
    // Closed other accordion content
    $(".blog-box-extra-description").not(accordionContent).slideUp();
    $(".blog-box-extra-description")
      .not(accordionContent)
      .next(".blog-button")
      .text("MORE");

    // Toggle only the clicked content
    accordionContent.slideToggle();
  });
});
