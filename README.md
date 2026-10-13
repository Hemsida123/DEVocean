# Devocean Divers – leverans

En engelskspråkig, statisk webbplats med 54 innehållssidor, 13 kompatibilitetssidor för äldre adresser, optimerade originalbilder, lokal videofilm, prislista och kontaktflöde. Ingen installation eller byggtjänst behövs för publicering.

## Öppna och publicera

Packa upp `devocean-divers-github.zip`. Öppna `index.html` i en webbläsare för en lokal förhandsvisning. Behåll alla undermappar bredvid filen – enbart indexfilen innehåller inte bilder, typsnitt eller undersidor.

På GitHub Pages: lägg ZIP-filens **uppackade innehåll** i projektets rot. Välj rätt branch och `/ (root)` under Settings → Pages. På webbhotell: ladda upp samma innehåll i domänens webbrot. Sidan använder relativa interna länkar och fungerar även under en GitHub-projektsökväg.

## Kontaktformuläret

Mottagaren är `devoceandivers.mexico@gmail.com`, hämtad från originalwebbplatsen. WhatsApp är `+52 984 314 2681`.

Formuläret validerar uppgifterna och skapar ett färdigt meddelande. Besökaren väljer sedan e-post eller WhatsApp och skickar själv där. Inga uppgifter lagras eller skickas i bakgrunden; ingen falsk skickat-bekräftelse visas. Automatisk formulärleverans direkt från sidan kräver en separat, bekräftad koppling till webbhotell/server eller formulärtjänst. Den kopplingen ingår inte i denna statiska leverans.

## Innehåll som kunden behöver godkänna före skarp lansering

- Cozumel, grottdykning, vissa teknikpriser, kursmaterial och bokningsvillkor skiljer sig mellan originalwebbplatsen och prislistan från maj 2026. Därför används offert eller tydliga förbehåll där källorna motsäger varandra.
- Uthyrningslistans dollartecken saknar uttrycklig valutakod i källan. Valutan behöver bekräftas.
- Omdömen är namngivna sammanfattningar av originalsidans historiska kundberättelser, inte nya citat eller ett verifierat samlat betyg. Tripadvisor-länken går till företagets befintliga profilsida.
- Bloggen har egna introduktionssidor med länk till respektive fullständig originalartikel. Artiklarna är inte återgivna i sin helhet.
- Äldre köp-/checkoutmallar har ersatts av bokningsförfrågningar, utan betalning online.

## SEO och prestanda

Varje innehållssida har engelsk sidtitel, beskrivning, en H1, kanonisk adress och strukturerad data. Sitemap och robots.txt ingår. Bilder har alternativtext, dimensioner, responsiva WebP-versioner och uppskjuten laddning under första vyn. Typsnittet lagras lokalt. Videon laddas först vid uppspelning. Inga externa JavaScript-bibliotek krävs.

Kanoniska adresser och sitemap är förberedda för `https://www.devoceandivers.com.mx/`. Ändra dem före lansering om domänen blir en annan. En offentlig demosida bör inte användas som den slutliga domänen i Google. Säkerställ HTTPS och relevanta säkerhets-/cacheheaders hos webbhotellet. Inga placeringar i Google eller uppmätta hastighetsbetyg garanteras.

## Kontroller

Automatisk kontroll av 67 HTML-filer, 2 508 lokala referenser, 273 bildreferenser och 55 JSON-LD-block passerade. Mobilmeny, erfarenhetsfilter, FAQ, formulärvalidering och lokalt förberett meddelande provades i webbläsaren. Inga riktiga förfrågningar skickades. Visuell kontroll gjordes i 1440, 1280 och 390 pixlars bredd. Slutgranskning dokumenteras separat i projektets granskningsmapp.

Projektets utvecklingsfiler ligger utanför webbpaketet: `build.mjs` genererar HTML från `data/content.json`; CSS/JS under `dist/` är leveransens källfiler. `assets-manifest.json` dokumenterar bildkällor. Pris-PDF och originalvarumärkets mediefiler är lokala i paketet; kontrollera kundens rättigheter före publicering.

## Publiceringsstatus

Webbplatsen har inte publicerats på en ny adress. Sites-publicering stoppades av kontots hostinggräns; ingen befintlig livewebbplats har ändrats. Den lokala leveransen kan laddas upp till GitHub Pages eller webbhotell.
