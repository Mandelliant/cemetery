const originalWidth = 1920;
const originalHeight = 1076;

const modalContentArray = [
  {
    'header-title': 'Here lies a staking rewards contract.',
    'header-description': 'It worked hard, distributed faithfully… but only for a little while.',
    'content': "<P>Deployed: Block 4815162342</P><P>Expired: Block 4815162343</P><P>Cause of death: Limited lifecycle</P>",
    'main-content': '<p>This staking rewards contract started with a mission—to incentivize users, reward commitment, and build liquidity. But like so many before it, it was bound by the limits of a predetermined staking period. Once that period ended, the contract’s purpose was fulfilled, and it was left to expire—its potential halted, its participants needing to migrate or redeploy elsewhere.</p><p>This is the fate of short-lived staking contracts: they burn bright, but not for long. Their lifespans are predetermined, leaving users scrambling to redeploy or move liquidity once the contract reaches the end of its life.</p>',
  },
  {
    'header-title': 'Here lies an auction contract.',
    'header-description': 'The bids were high, the competition fierce... until it wasn’t.',
    'content': "<P>Deployed: Block 4815162342</P><P>Expired: Block 4815162343</P><P>Cause of death: Outbid by complexity</P>",
    'main-content': "<p>This auction contract did what it was designed to do—host an auction, gather bids, and transfer assets to the winner when the time expired. However, once the auction ended, so did the contract's purpose. It was limited to a single auction cycle, forced to terminate and redeploy each time a new auction began. For developers, this meant added complexity and overhead. For participants, it meant missed opportunities and the inconvenience of waiting for new deployments.</p><p>This is the fate of short-lived auction contracts: they are built for one-off events. Every new auction requires fresh deployment, creating a fragmented user experience and adding unnecessary friction to what could otherwise be a seamless, continuous marketplace.</p>",
  },
  {
    'header-title': 'Here lies a subscriptions contract.',
    'header-description': 'It collected recurring fees… until it couldn’t keep up.',
    'content': "<P>Deployed: Block 4815162342</P><P>Expired: Block 4815162343</P><P>Cause of death: Lack of flexibility</P>",
    'main-content': "<p>This auction contract did what it was designed to do—host an auction, gather bids, and transfer assets to the winner when the time expired. However, once the auction ended, so did the contract's purpose. It was limited to a single auction cycle, forced to terminate and redeploy each time a new auction began. For developers, this meant added complexity and overhead. For participants, it meant missed opportunities and the inconvenience of waiting for new deployments.</p><p>This is the fate of short-lived auction contracts: they are built for one-off events. Every new auction requires fresh deployment, creating a fragmented user experience and adding unnecessary friction to what could otherwise be a seamless, continuous marketplace.</p>",
  },
  {
    'header-title': 'Here lies an auction contract.',
    'header-description': 'The bids were high, the competition fierce... until it wasn’t.',
    'content': "<P>Deployed: Block 4815162342</P><P>Expired: Block 4815162343</P><P>Cause of death: Outbid by complexity</P>",
    'main-content': "<p>This auction contract did what it was designed to do—host an auction, gather bids, and transfer assets to the winner when the time expired. However, once the auction ended, so did the contract's purpose. It was limited to a single auction cycle, forced to terminate and redeploy each time a new auction began. For developers, this meant added complexity and overhead. For participants, it meant missed opportunities and the inconvenience of waiting for new deployments.</p><p>This is the fate of short-lived auction contracts: they are built for one-off events. Every new auction requires fresh deployment, creating a fragmented user experience and adding unnecessary friction to what could otherwise be a seamless, continuous marketplace.</p>",
  },
  {
    'header-title': 'Here lies an auction contract.',
    'header-description': 'The bids were high, the competition fierce... until it wasn’t.',
    'content': "<P>Deployed: Block 4815162342</P><P>Expired: Block 4815162343</P><P>Cause of death: Outbid by complexity</P>",
    'main-content': "<p>This auction contract did what it was designed to do—host an auction, gather bids, and transfer assets to the winner when the time expired. However, once the auction ended, so did the contract's purpose. It was limited to a single auction cycle, forced to terminate and redeploy each time a new auction began. For developers, this meant added complexity and overhead. For participants, it meant missed opportunities and the inconvenience of waiting for new deployments.</p><p>This is the fate of short-lived auction contracts: they are built for one-off events. Every new auction requires fresh deployment, creating a fragmented user experience and adding unnecessary friction to what could otherwise be a seamless, continuous marketplace.</p>",
  },

]

$(document).ready(function () {
  function adjustImageMap() {
    const viewportWidth = $(window).width();
    const viewportHeight = $(window).height();

    // Calculate scale factor and offset due to cropping
    const widthScale = viewportWidth / originalWidth;
    const heightScale = viewportHeight / originalHeight;

    let scale;
    let xOffset = 0;
    let yOffset = 0;

    // Determine the effective scale and calculate cropping offset
    if (widthScale > heightScale) {
      // Image is scaled based on width (cropped vertically)
      scale = widthScale;
      yOffset = (originalHeight * scale - viewportHeight) / 2;
    } else {
      // Image is scaled based on height (cropped horizontally)
      scale = heightScale;
      xOffset = (originalWidth * scale - viewportWidth) / 2;
    }

    $("#image-map area").each(function () {
      const originalCoords = $(this)
        .attr("data-original-coords")
        .split(",")
        .map(Number);
      const adjustedCoords = originalCoords.map((coord, index) => {
        if (index % 2 === 0) {
          // x-coordinate
          return Math.round(coord * scale - xOffset);
        } else {
          // y-coordinate
          return Math.round(coord * scale - yOffset);
        }
      });
      $(this).attr("coords", adjustedCoords.join(","));
    });
  }

  // Store original coordinates in a data attribute for each area
  $("#image-map area").each(function () {
    $(this).attr("data-original-coords", $(this).attr("coords"));
  });

  // Resize image map when window is resized
  $(window).on("resize", adjustImageMap);

  // Initial resize on page load
  adjustImageMap();

  const glowEffect = $("#glowEffect");

  // Function to position the glow effect
  function positionGlow(coords, bgImage, areaClass) {
    const coordsArray = coords.split(",").map(Number);

    // Calculate the bounding box for the polygon
    const xCoords = coordsArray.filter((_, i) => i % 2 === 0);
    const yCoords = coordsArray.filter((_, i) => i % 2 !== 0);

    const minX = Math.min(...xCoords);
    const maxX = Math.max(...xCoords);
    const minY = Math.min(...yCoords);
    const maxY = Math.max(...yCoords);

    const width = maxX - minX;
    const height = maxY - minY;
    
    glowEffect.addClass(areaClass);

    // Position and show the glow effect
    glowEffect.css({
      left: `${minX}px`,
      top: `${minY}px`,
      width: `${width}px`,
      height: `${height}px`,
      opacity: `1`,
      backgroundImage: `url(${bgImage})`,
    });
  }

  // Mouseenter event to show the glow effect
  $("#image-map area").on("mouseenter", function () {
    const coords = $(this).attr("coords");
    $(this).css({
      "cursor": "pointer"
    });
    const bgImage = $(this).data("bg-image"); // Get the background image URL from data attribute
    const areaClass = $(this).data("bg-class"); // Get the background image URL from data attribute
    positionGlow(coords, bgImage, areaClass);
  });

  // Mouseleave event to hide the glow effect
  $("#image-map area").on("mouseleave", function () {
    glowEffect.css({
      "opacity": 0
    }); // Hide the glow
    const areaClass = $(this).data("bg-class");
    glowEffect.removeClass(areaClass);
  });

  $("#image-map area").each(function (index) {
    $(this).click(function() {
      const modalId = $(this).data("modal-id");
      $("#areaModal").addClass(modalId);
      $("#areaModal .modal-body .header .title").text(modalContentArray[index]["header-title"]);
      $("#areaModal .modal-body .header .description").text(modalContentArray[index]["header-description"]);
      $("#areaModal .modal-body .content").html(modalContentArray[index]["content"]);
      $("#areaModal .modal-body .main-content").html(modalContentArray[index]["main-content"]);
      $("#areaModal").modal("show");
    })
  });

  // Open the modal automatically on page load
  $("#cemeteryModal").modal("show");

  // Music play/stop toggle
  const musicIcon = document.getElementById("musicIcon");
  const backgroundMusic = document.getElementById("backgroundMusic");
  let isPlaying = false;

  // Define paths for play and stop icons
  const playIcon = "./assets/images/voice-icon.svg"; // Replace with your play icon SVG path
  const stopIcon = "./assets/images/voice-off-icon.svg"; // Replace with your stop icon SVG path

  musicIcon.addEventListener("click", () => {
    if (isPlaying) {
      backgroundMusic.pause();
      musicIcon.src = stopIcon; // Switch to play icon when paused
    } else {
      backgroundMusic.play();
      musicIcon.src = playIcon; // Switch to stop icon when playing
    }
    isPlaying = !isPlaying;
  });

  $(".custom-modal .enter-button").click(function () {
    backgroundMusic.play();
    isPlaying = true;
    $(".custom-modal").modal("hide");
  });

  $("#areaModal .enter-button").click(function () {
    $("#areaModal").modal("hide");
    var classListStr = $("#areaModal").attr('class');
    if (classListStr.search('modal-area') !== -1) {
      var modalNumClass = classListStr.substr(classListStr.search('modal-area'), 11);
      $("#areaModal").css({
        display: "none"
      })
      $("#areaModal").removeClass(modalNumClass);
    }
  });

});
