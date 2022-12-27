javascript: (function () {
	let data = JSON.parse(
		application_config.dataset[
			"yearinreview_" + JSON.parse(application_config.dataset.userinfo).accountid + "_2022"
		]
	).playtime_stats;

	document.querySelector(".yirlanding_SectionTitle_AmQ9d").innerHTML =
		"You spent " +
		Math.round(data.total_stats.total_playtime_seconds / 3600) +
		" hours playing this year!<br/><br/>" +
		document.querySelector(".yirlanding_SectionTitle_AmQ9d").innerHTML;

	document.querySelectorAll(".yirlanding_GridItem_2VmQC").forEach((e) => {
		let appID = e
			.querySelector(".yirlanding_BackgroundImage_2UVYU")
			.style.backgroundImage.split("apps/")
			.pop()
			.split("/")[0];

		if (!appID.includes("url")) {
			let mainDiv = e.querySelector(".yirlanding_SummaryBlockExtrasCtn_1fY-T");
			let statDiv = mainDiv.childNodes[0].cloneNode(true);
			statDiv.childNodes[0].innerHTML = Math.round(
				data.games.find((game) => game.appid == appID).stats.total_playtime_seconds / 3600
			);
			statDiv.childNodes[1].innerHTML = "Hours Played";
			mainDiv.append(statDiv);
		}
	});
})();
