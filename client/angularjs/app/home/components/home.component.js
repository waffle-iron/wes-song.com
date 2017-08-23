const home = {
	bindings: {

	},
	controller: function () {
		let ctrl = this;
		ctrl.title = '5340 Coffee and Events';

		ctrl.$onInit = function () {
			console.log('init Home');
		};
		ctrl.$postLink = function () {};
	},
	template: `<div class="body-container">
    <h1>Home</h1>
    <div class="text-area">
        <p>Bacon ipsum dolor amet andouille pastrami capicola alcatra turkey, salami meatball pancetta meatloaf cow beef ribs pig ball tip jowl. Meatball ham beef spare ribs ball tip tri-tip jowl bresaola tenderloin tongue. Frankfurter bacon burgdoggen, ball tip turkey ham hock kevin rump andouille meatloaf spare ribs shankle. Picanha t-bone bacon corned beef, frankfurter ham ground round prosciutto flank chuck turkey kevin biltong kielbasa. Shank landjaeger kielbasa short ribs meatball pork.</p>

        <p>Alcatra pig ribeye short ribs biltong picanha chicken prosciutto cow. Leberkas beef cupim capicola rump porchetta tail pork. Turducken swine chuck, cow venison turkey meatloaf pork jerky t-bone fatback andouille. Tongue bacon meatball salami drumstick sirloin short loin swine jowl rump fatback alcatra frankfurter pork loin ribeye. Boudin shankle ham tri-tip andouille pancetta turducken chuck. Pork cow pork loin short loin pig chuck meatloaf alcatra shoulder frankfurter sausage venison. Pancetta pig brisket meatloaf salami ground round t-bone chicken meatball landjaeger frankfurter pastrami biltong bresaola.</p>

        <p>Jerky spare ribs turkey, alcatra shoulder frankfurter picanha short loin sirloin cow tri-tip. Ribeye rump doner strip steak andouille pork chop ham hock ground round pancetta. Frankfurter meatloaf hamburger brisket tongue pastrami. Ball tip meatball doner swine, jerky shankle ribeye.</p>

        <p>Doner ground round landjaeger salami biltong t-bone. Pancetta bresaola jowl fatback. Turducken hamburger capicola, tenderloin kevin landjaeger andouille ball tip. Turducken biltong corned beef pastrami tail pork chop. Short loin chicken drumstick pork chop, pancetta doner sirloin meatball capicola boudin tenderloin leberkas picanha beef ribs andouille.</p>

        <p>Leberkas brisket beef spare ribs, porchetta ground round pork loin tenderloin capicola rump ball tip pork kielbasa kevin. Frankfurter shoulder pork loin strip steak. Burgdoggen meatloaf pork loin ribeye pancetta, filet mignon turkey jerky fatback ham hock ball tip andouille pig rump. Beef ribs bresaola shankle t-bone filet mignon. Kielbasa alcatra boudin, bresaola pork loin turducken venison ball tip ham pork chop tenderloin flank tri-tip kevin. Pork chop chicken porchetta, sausage ham pastrami turkey bresaola meatloaf ribeye spare ribs burgdoggen corned beef jerky venison.</p>
        
        <p>Bacon ipsum dolor amet andouille pastrami capicola alcatra turkey, salami meatball pancetta meatloaf cow beef ribs pig ball tip jowl. Meatball ham beef spare ribs ball tip tri-tip jowl bresaola tenderloin tongue. Frankfurter bacon burgdoggen, ball tip turkey ham hock kevin rump andouille meatloaf spare ribs shankle. Picanha t-bone bacon corned beef, frankfurter ham ground round prosciutto flank chuck turkey kevin biltong kielbasa. Shank landjaeger kielbasa short ribs meatball pork.</p>

        <p>Alcatra pig ribeye short ribs biltong picanha chicken prosciutto cow. Leberkas beef cupim capicola rump porchetta tail pork. Turducken swine chuck, cow venison turkey meatloaf pork jerky t-bone fatback andouille. Tongue bacon meatball salami drumstick sirloin short loin swine jowl rump fatback alcatra frankfurter pork loin ribeye. Boudin shankle ham tri-tip andouille pancetta turducken chuck. Pork cow pork loin short loin pig chuck meatloaf alcatra shoulder frankfurter sausage venison. Pancetta pig brisket meatloaf salami ground round t-bone chicken meatball landjaeger frankfurter pastrami biltong bresaola.</p>

        <p>Jerky spare ribs turkey, alcatra shoulder frankfurter picanha short loin sirloin cow tri-tip. Ribeye rump doner strip steak andouille pork chop ham hock ground round pancetta. Frankfurter meatloaf hamburger brisket tongue pastrami. Ball tip meatball doner swine, jerky shankle ribeye.</p>

        <p>Doner ground round landjaeger salami biltong t-bone. Pancetta bresaola jowl fatback. Turducken hamburger capicola, tenderloin kevin landjaeger andouille ball tip. Turducken biltong corned beef pastrami tail pork chop. Short loin chicken drumstick pork chop, pancetta doner sirloin meatball capicola boudin tenderloin leberkas picanha beef ribs andouille.</p>

        <p>Leberkas brisket beef spare ribs, porchetta ground round pork loin tenderloin capicola rump ball tip pork kielbasa kevin. Frankfurter shoulder pork loin strip steak. Burgdoggen meatloaf pork loin ribeye pancetta, filet mignon turkey jerky fatback ham hock ball tip andouille pig rump. Beef ribs bresaola shankle t-bone filet mignon. Kielbasa alcatra boudin, bresaola pork loin turducken venison ball tip ham pork chop tenderloin flank tri-tip kevin. Pork chop chicken porchetta, sausage ham pastrami turkey bresaola meatloaf ribeye spare ribs burgdoggen corned beef jerky venison.</p>
    </div>
</div>`
};

angular.module('app.home')
	.component('home', home);
