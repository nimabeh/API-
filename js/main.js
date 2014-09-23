

      google.load("search", "1", {"language" : "en"});

      // Call this function when the page has been loaded
      function initialize() {
        var searchControl = new google.search.SearchControl({placeholder:"RE-SEARCH"});
		
		// site restricted web search
		var siteSearch1 = new google.search.WebSearch();
		siteSearch1.setUserDefinedLabel("open culture");
		siteSearch1.setUserDefinedClassSuffix("siteSearch");
		siteSearch1.setSiteRestriction("openculture.com");
		searchControl.addSearcher(siteSearch1);

		var siteSearch2 = new google.search.WebSearch();
		siteSearch2.setUserDefinedLabel("BOMB");
		siteSearch2.setUserDefinedClassSuffix("siteSearch");
		siteSearch2.setSiteRestriction("http://bombmagazine.org/");
		searchControl.addSearcher(siteSearch2);
			
			var siteSearch3 = new google.search.WebSearch();
		siteSearch3.setUserDefinedLabel("T3Canopy");
		siteSearch3.setUserDefinedClassSuffix("siteSearch");
		siteSearch3.setSiteRestriction("http://canopycanopycanopy.com/");
		searchControl.addSearcher(siteSearch3);

		var siteSearch4 = new google.search.WebSearch();
		siteSearch4.setUserDefinedLabel("MET");
		siteSearch4.setUserDefinedClassSuffix("siteSearch");
		siteSearch4.setSiteRestriction("http://www.metmuseum.org/research/metpublications/titles-with-full-text-online");
		searchControl.addSearcher(siteSearch4);

		var siteSearch5 = new google.search.WebSearch();
		siteSearch5.setUserDefinedLabel("UC Press");
		siteSearch5.setUserDefinedClassSuffix("siteSearch");
		siteSearch5.setSiteRestriction("http://publishing.cdlib.org/ucpressebooks/");
		searchControl.addSearcher(siteSearch5);
		//Search API Topics
		searchControl.addSearcher(new google.search.BlogSearch());
		searchControl.addSearcher(new google.search.BookSearch());
		//others
		//searchControl.addSearcher(new google.search.LocalSearch());
		//searchControl.addSearcher(new google.search.PatentSearch());
			
		// create a drawOptions object
		var drawOptions = new google.search.DrawOptions();
		// tell the searcher to draw itself in tabbed mode
		drawOptions.setDrawMode(google.search.SearchControl.DRAW_MODE_TABBED);
		searchControl.draw(document.getElementById("searchcontrol"), drawOptions);
      }
      google.setOnLoadCallback(initialize);
      
 $(document).ready(function(){
 	$("#image1").on('click',function(){
 		$("#image1").hide();
 	});
});