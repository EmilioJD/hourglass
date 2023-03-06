<!-- <nav>
	<a href="/">Start</a>
	<a href="/timeline">Timeline</a>
</nav> -->
<script lang="ts" context="module">
	import { Form, FormGroup, Input, Label, Button } from 'sveltestrap';
	import { goto } from '$app/navigation';

	var currUserName = '';
	export var currUserEmail = '';
	export let timeZone = '(GMT-05:00) Eastern Time (US & Canada)';

	export function resetUserTimezone() {
		timeZone = '(GMT-05:00) Eastern Time (US & Canada)';
	}

	function onSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);

		const data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}

		timeZone = data['timeZone'];

		currUserEmail = data['email'];
		goto(`/timeline`);
	}
</script>

<div id="app">
	<div id="title">
		<br />
		<h1>Event: Sample 30-Minute Meeting</h1>

		<h6>The organizer wants to know your availability from 6am - 10pm ET.</h6>
	</div>

	<br />

	<h1>{currUserName}</h1>

	<div id="form">
		<Form
			on:submit={(e) => {
				onSubmit(e);
			}}
		>
			<FormGroup>
				<Label for="name">Name*</Label>
				<Input type="text" name="name" id="name" placeholder="Name" />
			</FormGroup>
			<FormGroup>
				<Label for="email">Email*</Label>
				<Input type="email" name="email" id="email" placeholder="Email" />
			</FormGroup>
			<FormGroup>
				<Label for="timeZone">Time Zone*</Label>
				<Input bind:value={timeZone} type="select" name="timeZone" id="timeZone">
					<option data-time-zone-id="5" data-gmt-adjustment="GMT-08:00"
						>(GMT-08:00) Pacific Time (US & Canada)</option
					>
					<option data-time-zone-id="9" data-gmt-adjustment="GMT-07:00"
						>(GMT-07:00) Mountain Time (US & Canada)</option
					>
					<option data-time-zone-id="11" data-gmt-adjustment="GMT-06:00"
						>(GMT-06:00) Central Time (US & Canada)</option
					>
					<option data-time-zone-id="15" data-gmt-adjustment="GMT-05:00"
						>(GMT-05:00) Eastern Time (US & Canada)</option
					>
					<option data-time-zone-id="2" data-gmt-adjustment="GMT-11:00"
						>(GMT-11:00) Midway Island, Samoa</option
					>
					<option data-time-zone-id="3" data-gmt-adjustment="GMT-10:00">(GMT-10:00) Hawaii</option>
					<option data-time-zone-id="1" data-gmt-adjustment="GMT-12:00"
						>(GMT-12:00) International Date Line West</option
					>
					<option data-time-zone-id="4" data-gmt-adjustment="GMT-09:00">(GMT-09:00) Alaska</option>
					<option data-time-zone-id="6" data-gmt-adjustment="GMT-08:00"
						>(GMT-08:00) Tijuana, Baja California</option
					>
					<option data-time-zone-id="7" data-gmt-adjustment="GMT-07:00">(GMT-07:00) Arizona</option>
					<option data-time-zone-id="8" data-gmt-adjustment="GMT-07:00"
						>(GMT-07:00) Chihuahua, La Paz, Mazatlan</option
					>
					<option data-time-zone-id="10" data-gmt-adjustment="GMT-06:00"
						>(GMT-06:00) Central America</option
					>
					<option data-time-zone-id="12" data-gmt-adjustment="GMT-06:00"
						>(GMT-06:00) Guadalajara, Mexico City, Monterrey</option
					>
					<option data-time-zone-id="13" data-gmt-adjustment="GMT-06:00"
						>(GMT-06:00) Saskatchewan</option
					>
					<option data-time-zone-id="14" data-gmt-adjustment="GMT-05:00"
						>(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option
					>
					<option data-time-zone-id="16" data-gmt-adjustment="GMT-05:00"
						>(GMT-05:00) Indiana (East)</option
					>
					<option data-time-zone-id="17" data-gmt-adjustment="GMT-04:00"
						>(GMT-04:00) Atlantic Time (Canada)</option
					>
					<option data-time-zone-id="18" data-gmt-adjustment="GMT-04:00"
						>(GMT-04:00) Caracas, La Paz</option
					>
					<option data-time-zone-id="19" data-gmt-adjustment="GMT-04:00">(GMT-04:00) Manaus</option>
					<option data-time-zone-id="20" data-gmt-adjustment="GMT-04:00"
						>(GMT-04:00) Santiago</option
					>
					<option data-time-zone-id="21" data-gmt-adjustment="GMT-03:30"
						>(GMT-03:30) Newfoundland</option
					>
					<option data-time-zone-id="22" data-gmt-adjustment="GMT-03:00"
						>(GMT-03:00) Brasilia</option
					>
					<option data-time-zone-id="23" data-gmt-adjustment="GMT-03:00"
						>(GMT-03:00) Buenos Aires, Georgetown</option
					>
					<option data-time-zone-id="24" data-gmt-adjustment="GMT-03:00"
						>(GMT-03:00) Greenland</option
					>
					<option data-time-zone-id="25" data-gmt-adjustment="GMT-03:00"
						>(GMT-03:00) Montevideo</option
					>
					<option data-time-zone-id="26" data-gmt-adjustment="GMT-02:00"
						>(GMT-02:00) Mid-Atlantic</option
					>
					<option data-time-zone-id="27" data-gmt-adjustment="GMT-01:00"
						>(GMT-01:00) Cape Verde Is.</option
					>
					<option data-time-zone-id="28" data-gmt-adjustment="GMT-01:00">(GMT-01:00) Azores</option>
					<option data-time-zone-id="29" data-gmt-adjustment="GMT+00:00"
						>(GMT+00:00) Casablanca, Monrovia, Reykjavik</option
					>
					<option data-time-zone-id="30" data-gmt-adjustment="GMT+00:00"
						>(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London</option
					>
					<option data-time-zone-id="31" data-gmt-adjustment="GMT+01:00"
						>(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option
					>
					<option data-time-zone-id="32" data-gmt-adjustment="GMT+01:00"
						>(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option
					>
					<option data-time-zone-id="33" data-gmt-adjustment="GMT+01:00"
						>(GMT+01:00) Brussels, Copenhagen, Madrid, Paris</option
					>
					<option data-time-zone-id="34" data-gmt-adjustment="GMT+01:00"
						>(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option
					>
					<option data-time-zone-id="35" data-gmt-adjustment="GMT+01:00"
						>(GMT+01:00) West Central Africa</option
					>
					<option data-time-zone-id="36" data-gmt-adjustment="GMT+02:00">(GMT+02:00) Amman</option>
					<option data-time-zone-id="37" data-gmt-adjustment="GMT+02:00"
						>(GMT+02:00) Athens, Bucharest, Istanbul</option
					>
					<option data-time-zone-id="38" data-gmt-adjustment="GMT+02:00">(GMT+02:00) Beirut</option>
					<option data-time-zone-id="39" data-gmt-adjustment="GMT+02:00">(GMT+02:00) Cairo</option>
					<option data-time-zone-id="40" data-gmt-adjustment="GMT+02:00"
						>(GMT+02:00) Harare, Pretoria</option
					>
					<option data-time-zone-id="41" data-gmt-adjustment="GMT+02:00"
						>(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option
					>
					<option data-time-zone-id="42" data-gmt-adjustment="GMT+02:00"
						>(GMT+02:00) Jerusalem</option
					>
					<option data-time-zone-id="43" data-gmt-adjustment="GMT+02:00">(GMT+02:00) Minsk</option>
					<option data-time-zone-id="44" data-gmt-adjustment="GMT+02:00"
						>(GMT+02:00) Windhoek</option
					>
					<option data-time-zone-id="45" data-gmt-adjustment="GMT+03:00"
						>(GMT+03:00) Kuwait, Riyadh, Baghdad</option
					>
					<option data-time-zone-id="46" data-gmt-adjustment="GMT+03:00"
						>(GMT+03:00) Moscow, St. Petersburg, Volgograd</option
					>
					<option data-time-zone-id="47" data-gmt-adjustment="GMT+03:00">(GMT+03:00) Nairobi</option
					>
					<option data-time-zone-id="48" data-gmt-adjustment="GMT+03:00">(GMT+03:00) Tbilisi</option
					>
					<option data-time-zone-id="49" data-gmt-adjustment="GMT+03:30">(GMT+03:30) Tehran</option>
					<option data-time-zone-id="50" data-gmt-adjustment="GMT+04:00"
						>(GMT+04:00) Abu Dhabi, Muscat</option
					>
					<option data-time-zone-id="51" data-gmt-adjustment="GMT+04:00">(GMT+04:00) Baku</option>
					<option data-time-zone-id="52" data-gmt-adjustment="GMT+04:00">(GMT+04:00) Yerevan</option
					>
					<option data-time-zone-id="53" data-gmt-adjustment="GMT+04:30">(GMT+04:30) Kabul</option>
					<option data-time-zone-id="54" data-gmt-adjustment="GMT+05:00"
						>(GMT+05:00) Yekaterinburg</option
					>
					<option data-time-zone-id="55" data-gmt-adjustment="GMT+05:00"
						>(GMT+05:00) Islamabad, Karachi, Tashkent</option
					>
					<option data-time-zone-id="56" data-gmt-adjustment="GMT+05:30"
						>(GMT+05:30) Sri Jayawardenapura</option
					>
					<option data-time-zone-id="57" data-gmt-adjustment="GMT+05:30"
						>(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option
					>
					<option data-time-zone-id="58" data-gmt-adjustment="GMT+05:45"
						>(GMT+05:45) Kathmandu</option
					>
					<option data-time-zone-id="59" data-gmt-adjustment="GMT+06:00"
						>(GMT+06:00) Almaty, Novosibirsk</option
					>
					<option data-time-zone-id="60" data-gmt-adjustment="GMT+06:00"
						>(GMT+06:00) Astana, Dhaka</option
					>
					<option data-time-zone-id="61" data-gmt-adjustment="GMT+06:30"
						>(GMT+06:30) Yangon (Rangoon)</option
					>
					<option data-time-zone-id="62" data-gmt-adjustment="GMT+07:00"
						>(GMT+07:00) Bangkok, Hanoi, Jakarta</option
					>
					<option data-time-zone-id="63" data-gmt-adjustment="GMT+07:00"
						>(GMT+07:00) Krasnoyarsk</option
					>
					<option data-time-zone-id="64" data-gmt-adjustment="GMT+08:00"
						>(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option
					>
					<option data-time-zone-id="65" data-gmt-adjustment="GMT+08:00"
						>(GMT+08:00) Kuala Lumpur, Singapore</option
					>
					<option data-time-zone-id="66" data-gmt-adjustment="GMT+08:00"
						>(GMT+08:00) Irkutsk, Ulaan Bataar</option
					>
					<option data-time-zone-id="67" data-gmt-adjustment="GMT+08:00">(GMT+08:00) Perth</option>
					<option data-time-zone-id="68" data-gmt-adjustment="GMT+08:00">(GMT+08:00) Taipei</option>
					<option data-time-zone-id="69" data-gmt-adjustment="GMT+09:00"
						>(GMT+09:00) Osaka, Sapporo, Tokyo</option
					>
					<option data-time-zone-id="70" data-gmt-adjustment="GMT+09:00">(GMT+09:00) Seoul</option>
					<option data-time-zone-id="71" data-gmt-adjustment="GMT+09:00">(GMT+09:00) Yakutsk</option
					>
					<option data-time-zone-id="72" data-gmt-adjustment="GMT+09:30"
						>(GMT+09:30) Adelaide</option
					>
					<option data-time-zone-id="73" data-gmt-adjustment="GMT+09:30">(GMT+09:30) Darwin</option>
					<option data-time-zone-id="74" data-gmt-adjustment="GMT+10:00"
						>(GMT+10:00) Brisbane</option
					>
					<option data-time-zone-id="75" data-gmt-adjustment="GMT+10:00"
						>(GMT+10:00) Canberra, Melbourne, Sydney</option
					>
					<option data-time-zone-id="76" data-gmt-adjustment="GMT+10:00">(GMT+10:00) Hobart</option>
					<option data-time-zone-id="77" data-gmt-adjustment="GMT+10:00"
						>(GMT+10:00) Guam, Port Moresby</option
					>
					<option data-time-zone-id="78" data-gmt-adjustment="GMT+10:00"
						>(GMT+10:00) Vladivostok</option
					>
					<option data-time-zone-id="79" data-gmt-adjustment="GMT+11:00"
						>(GMT+11:00) Magadan, Solomon Is., New Caledonia</option
					>
					<option data-time-zone-id="80" data-gmt-adjustment="GMT+12:00"
						>(GMT+12:00) Auckland, Wellington</option
					>
					<option data-time-zone-id="81" data-gmt-adjustment="GMT+12:00"
						>(GMT+12:00) Fiji, Kamchatka, Marshall Is.</option
					>
					<option data-time-zone-id="82" data-gmt-adjustment="GMT+13:00"
						>(GMT+13:00) Nuku'alofa</option
					>
				</Input>
			</FormGroup>
			<Button type="submit" color="primary">Next: Enter Your Availability</Button>
		</Form>
	</div>
</div>

<style>
	#app {
		color: #cbcbcb;
		background-color: #090c17;
	}
	#form {
		width: 80%;
		margin: auto;
	}

	#title {
		text-align: center;
	}
</style>
