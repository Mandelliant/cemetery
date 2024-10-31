const originalWidth = 1920;
const originalHeight = 1076;

const modalContentArray = [
  {
    "header-title": "Here lies a decentralized lending protocol",
    "header-description":
      "Loans were given, collateral secured... until cross-chain complexity stopped it in its tracks",
    content:
      "<P>Deployed: Block 4815162342</P><P>Expired: Block 4815162343</P><P>Cause of death: Bound by atomic operations</P>",
    "main-content":
      "<p>This lending platform faithfully executed its duties, offering loans and securing collateral on-chain with precision. Liquidations were fast, and interest rates competitive—for as long as everything happened within a single ecosystem. However, as users sought multi-chain lending capabilities, cracks began to show. It struggled to keep pace in a world where users wanted to borrow from one chain while collateral resided on another.</p><p>If only it had been built for asynchronous execution! Asynchronous liquidation triggers could monitor loans across chains, initiating liquidations even if collateral and debt resided on separate platforms. Liquidity aggregation could have drawn from multiple chains in real-time, optimizing interest rates and lowering loan-to-value risks without interruptions.</p><p>Orchestration would have brought this platform longer life.</p>",
    "redirect-url":
      "https://docs.agoric.com/guides/orchestration/how-orch-works.html",
  },
  {
    "header-title": "Here lies a single-chain yield aggregator",
    "header-description":
      "The returns were optimized, the profits were promising... but only within one chain",
    content:
      "<P>Deployed: Block 4815162342</P><P>Expired: Block 4815162343</P><P>Cause of death: Single-chain constriction</P>",
    "main-content":
      "<p>This yield aggregator set out to provide users with the best returns by shifting funds between high-yield opportunities—as long as everything remained on a single chain. It worked well within its own ecosystem, but the moment users sought higher yields across multiple blockchains, the aggregator faltered. It couldn’t manage rebalancing strategies across networks.</p><p>It could have asynchronously rebalanced vaults between multiple chains. Instead of relying on instant atomic operations, the aggregator could have shifted to an adaptive, asynchronous strategy that maximized returns smoothly across ecosystems. Unfortunately, limited to a single chain and real-time constraints, this yield aggregator missed its chance to thrive in a multi-chain world. </p> <p>With asynchronous contracts, this platform’s ending may have been different.</p>",
    "redirect-url":
      "https://docs.agoric.com/guides/orchestration/orchestration-basics/contract.html",
  },
  {
    "header-title": "Here lies a subscription contract",
    "header-description":
      "The fees were steady, the renewals consistent... until they weren’t.",
    content:
      "<P>Deployed: Block 4815162342</P><P>Expired: Block 4815162343</P><P>Cause of death: Buried under user intents</P>",
    "main-content":
      "<p>This subscription contract began with the goal of providing automated, recurring payments to ensure uninterrupted services for users. It operated well initially—until the complexities of modern blockchain environments overwhelmed it. Bound to a single chain, the contract couldn’t keep up as users demanded multi-chain payment options.</p><p>Every payment required the user’s active approval, which introduced friction, and lapses became common as users failed to keep up with approvals. As the contract tried to manage every interaction atomically, it was buried by the weight of complexity and manual intervention. Alas, this contract was constrained by outdated execution models, unable to meet the demands of a multi-chain world.</p><p>Orchestration accounts are an async secret weapon.</p>",
    "redirect-url":
      "https://docs.agoric.com/guides/orchestration/key-concepts.html#orchestration-account",
  },
  {
    "header-title": "Here lies an NFT auction contract",
    "header-description":
      "The bids were high, the competition fierce... until it wasn’t.",
    content:
      "<P>Deployed: Block 4815162342</P><P>Expired: Block 4815162343</P><P>Cause of death: Block-constrained execution</P>",
    "main-content":
      "<p>This NFT auction contract began with the promise of decentralized ownership and open competition. Yet, the excitement quickly waned as participants encountered the limitations of their single-chain environment. When people routinely have NFTs and liquidity spanning multiple chains, this contract’s limited scope forced participants to manually bridge tokens to the auction’s chain, creating unnecessary delays.</p><p>Without cross-chain capabilities, bidders had to interact with multiple wallets and platforms just to participate, introducing friction at every step. Even simple actions—such as monitoring bids or transferring NFTs—became cumbersome, requiring manual tracking and coordination across different blockchains.Constrained by single-chain limitations and block-level execution, this NFT auction contract fell short of meeting the expectations of the modern multi-chain marketplace.</p><p>What happens when you’re no longer bound by a single block?</p>",
    "redirect-url":
      "https://docs.agoric.com/guides/orchestration/contract-walkthroughs/send-anywhere.html",
  },
  {
    "header-title": "Here lies a staking rewards contract",
    "header-description":
      "It worked hard, distributed faithfully… but only for a little while.",
    content:
      "<P>Deployed: Block 4815162342</P><P>Expired: Block 4815162343</P><P>Cause of death: Limited lifecycle</P>",
    "main-content":
      "<p>This staking rewards contract began with the ambition to incentivize participation across chains, ensuring validators and stakers reaped their well-earned rewards. However, it quickly became apparent that it couldn’t keep pace with the multi-chain reality of modern staking. With stakers operating across multiple chains, the complexity multiplied, forcing users to manage rewards and positions manually.</p><p>Calculating interest, updating states, and distributing payouts involved multiple on-chain interactions. Stakers often missed opportunities to rebalance their positions across chains to optimize yields, further limiting their earning potential. Delayed tracking of rewards meant missed chances for re-staking and compounding returns. This staking rewards contract, tied to synchronous execution and atomic limitations, could not endure the demands of a multi-chain ecosystem.</p><p>Release your stake on any chain … programmatically.</p>",
    "redirect-url":
      "https://docs.agoric.com/guides/orchestration/contract-walkthroughs/cross-chain-unbond.html",
  },
];

$(document).ready(function () {
  var soundEffectHover = $("#soundEffectHover")[0];
  var soundEffectClick = $("#soundEffectClick")[0];
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
  // $("#image-map area").on("mouseenter", function () {
  //   const coords = $(this).attr("coords");

  //   $(this).css({
  //     cursor: "pointer",
  //   });

  //   soundEffectHover.play();

  //   const bgImage = $(this).data("bg-image"); // Get the background image URL from data attribute
  //   const areaClass = $(this).data("bg-class"); // Get the background image URL from data attribute
  //   positionGlow(coords, bgImage, areaClass);

  // });

  $("#image-map area").hover(
    function () {
      const coords = $(this).attr("coords");

      $(this).css({
        cursor: "pointer",
      });
      soundEffectHover.currentTime = 0;
      soundEffectHover.play();

      const bgImage = $(this).data("bg-image"); // Get the background image URL from data attribute
      const areaClass = $(this).data("bg-class"); // Get the background image URL from data attribute
      positionGlow(coords, bgImage, areaClass);
    },
    function () {
      // Stop sound when mouse leaves
      soundEffectHover.pause();
      soundEffectHover.currentTime = 0; // Reset to start
    }
  );

  // Mouseleave event to hide the glow effect
  $("#image-map area").on("mouseleave", function () {
    glowEffect.css({
      opacity: 0,
    }); // Hide the glow
    const areaClass = $(this).data("bg-class");
    glowEffect.removeClass(areaClass);
    soundEffectHover.pause();
  });

  $("#image-map area").each(function (index) {
    $(this).click(function () {
      soundEffectClick.currentTime = 0;
      soundEffectClick.play();
      const modalId = $(this).data("modal-id");
      $("#areaModal").addClass(modalId);
      $("#areaModal .modal-body .header .title").html(
        modalContentArray[index]["header-title"]
      );
      $("#areaModal .modal-body .header .description").text(
        modalContentArray[index]["header-description"]
      );
      $("#areaModal .modal-body .content").html(
        modalContentArray[index]["content"]
      );
      $("#areaModal .modal-body .main-content").html(
        modalContentArray[index]["main-content"]
      );
      $("#areaModal").modal("show");
    });
  });

  // Open the modal automatically on page load
  $("#cemeteryModal").modal("show");

  // Music play/stop toggle
  const musicController = $(".music-toggle .music-controller")[0];
  const soundEffectController = $(".music-toggle .sound-effect-controller")[0];
  const backgroundMusic = document.getElementById("backgroundMusic");
  let isBgMusicPlaying = false;
  let isSoundEffectPlaying = false;

  // Define paths for play and stop icons
  const playIcon = "./assets/images/voice-icon.svg"; // Replace with your play icon SVG path
  const stopIcon = "./assets/images/voice-off-icon.svg"; // Replace with your stop icon SVG path

  musicController.addEventListener("click", () => {
    if (isBgMusicPlaying) {
      backgroundMusic.pause();
      $(this).find(".voiceIcon1").attr("src", stopIcon); // Switch to play icon when paused
    } else {
      backgroundMusic.play();
      $(this).find(".voiceIcon1").attr("src", playIcon); // Switch to stop icon when playing
    }
    isBgMusicPlaying = !isBgMusicPlaying;
  });

  soundEffectController.addEventListener("click", () => {
    if (isSoundEffectPlaying) {
      soundEffectHover.muted = false;
      soundEffectClick.muted = false;
      $(this).find(".voiceIcon2").attr("src", playIcon); // Switch to play icon when paused
    } else {
      soundEffectHover.muted = true;
      soundEffectClick.muted = true;
      $(this).find(".voiceIcon2").attr("src", stopIcon); // Switch to stop icon when playing
    }
    isSoundEffectPlaying = !isSoundEffectPlaying;
  });

  $(".custom-modal .enter-button").click(function () {
    backgroundMusic.play();
    isBgMusicPlaying = true;
    $(".custom-modal").modal("hide");
  });

  $("#areaModal .enter-button").click(function () {
    $("#areaModal").modal("hide");
    var classListStr = $("#areaModal").attr("class");
    if (classListStr.search("modal-area") !== -1) {
      var modalNumClass = classListStr.substr(
        classListStr.search("modal-area"),
        11
      );
      var lastStr = modalNumClass.charAt(10);
      $(this).attr("href", modalContentArray[lastStr - 1]["redirect-url"]);
      $("#areaModal").css({
        display: "none",
      });
      $("#areaModal").removeClass(modalNumClass);
    }
  });
  $("#areaModal").on("hidden.bs.modal", function () {
    // put your default event here
    $("#areaModal").modal("hide");
    var classListStr = $("#areaModal").attr("class");
    if (classListStr.search("modal-area") !== -1) {
      var modalNumClass = classListStr.substr(
        classListStr.search("modal-area"),
        11
      );
      $("#areaModal").css({
        display: "none",
      });
      $("#areaModal").removeClass(modalNumClass);
    }
  });
});
