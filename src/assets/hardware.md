# Hardware

Below is a lot of technical information. Some of the pricing is a little outdated, but it should be roughly similar. The website(s) linked will help give more recent pricing.

Link for validating prices: https://www.solar-shop.co.za/

The guy who runs Solar shop has been doing Solar systems for something like 35+ years. Very knowledgeable.

Bear in mind that equipment bought from an installer is almost guaranteed to cost more, because the installer will be handling any warranties. i.e. if you buy direct you'll save money, but if anything is faulty it's your own cost and effort to have it shipped back for warranty repair/replacement.

I find that it's invaluable for checking prices though. If someone quotes you a lot more than solar-shop, they're probably ripping you off. I'd expect probably a 10-15% more than solar-shop from an installer.

_Disclaimer: Prices are estimates only and may not be up to date_

## Solar Panels

Hardware cost: R2,000~R2,700 per panel  
Installation cost: roughly R1,100ish per panel  
Lifespan: 20+ years

Installation cost might depend on ease or difficulty of mounting the panels on the roof.

The lifespan is not a fixed "they die in 20 years", the lifespan given actually means "after 20 years they only output 80% of their rated power".

There are some important things to note about solar panels that is not
immediately obvious:

### Technical info - Strings of panels

They are connected in "strings". Typically the inverter will only support 1, maybe 2 strings of panels and will have a maximum voltage and current supported for each string.

Because all the panels are in a "string", the power output is limited by the weakest panel. So e.g. if you have 12 panels and just 1 of them gets a shadow over it (e.g. from the chimney) which results in less power, ALL panels will land up reducing in power. It used to be that something as simple as a chimney or pipe shading 1 panel resulted in a massive drop across all panels, but newer technology limits that drop now.

Solar panels should ideally be facing North and at around 25deg. This is the optimal angle for South Africa. This isn't always possible, so one would get panels installed on the roof that faces as close as possible.

If your inverter supports 2 or more strings of panels, then one can do something like have 1 string facing north-east and 1 string facing north-west, giving you more power than if you only faced a single direction.

Technical note: The strings are based on what is called the MPPT (Maximum Power Point Tracking). This is some electronics designed to get the maximum amount of power out of the panels. If you mix panels in different directions (or even different makes and models of panels), it can't work properly and will result in very poor performance.

Your installer will be trying to get the optimum layout based on roof space, angle, shading, inverter limitations and more.

## Inverters

Hardware cost: R8,000~R55,000 (depends on inverter)  
Inverter installation cost: R10k+  
Lifespan: 10+ years

This is where things get complicated.

### Important notes/terms/features

_Max Power Output_: Inverters have a maximum in kW. You need an inverter larger than the amount of power you plan on using through it. This is the maximum amount of wattage at any point in time. More than this will trip the inverter - like a breaker does.

_Battery Voltage_: the higher the voltage the more efficient the inverter can use the power. Most common voltages are 12V, 24V and 48V.

_MPPT strings_: MPPT = Maximum Power Point Tracking. Basically it's a controller that extracts the maximum amount of power out of a solar panel string. If you only have 1 MPPT on the inverter, you can only have 1 set of solar panels. e.g. if you want to have half the panels on a different angle, you need another MPPT.

_Essential circuit_: This is everything connecting to a seperate DB board which is powered by the inverter. When using batteries, only the essential circuit will be powered by battery.

_Grid-tie/feedback_: If an inverter supports this feature, then it can provide solar to the whole house - but only while eskom is on. When eskom is off, then only the essential circuit can be powered.

_Hybrid_: Due to marketing this meaning led to confusion with some inverters. A "true hybrid", the original meaning, is an inverter that has a grid-tie feature as well as battery backup/off-grid. A certain range of inverters (Axpert) muddied the waters by calling their inverters hybrid because they "mix solar, battery and eskom", but they do not have grid-tie capability, making them different to all other hybrid inverters.

_Parallel Inverters_: Many inverter makes support linking in parallel. So e.g. if the inverter can only do 5kW but you need to support up to 12kW of appliances, you can parallel 3 of them to give you a max of 15kW.

There are 3 main types of inverter

### Off-grid / UPS

Cost: R8k~R16k  
Solar Panels and/or Battery. Can charge from Eskom but cannot feed back into the non-essential circuit.  
https://www.solar-shop.co.za/119-mecer-inverters

This is great for farmers, rural areas or when needing a cheap backup/solar system.

Note: The Mecer/RCA/Axpert inverters are marketed as "Hybrid" but they are not proper Hybrid, they are actually very basic and many of them are very limited in what they can do.

Primary recommended purpose: Loadshedding backup. One can install these without solar panels and just a battery. It then acts as a very big UPS and will recharge batteries from Eskom when there's power.

Alternative purpose: Low cost solar setup. Not recommended, but to save costs it can be used as a sort-of hybrid. It will run off solar, it will support loadshedding. _What it doesn't do is feed the whole house with power_. It only supplies the essential load. Many models are also not very good at mixing power from solar + eskom.

Ideally avoid these unless all you want is a UPS for the house.

Pros:

- Cheap
- Works well for being completely off-grid (no eskom)

Cons:

- Poor at mixing solar and eskom
- Excess solar is lost as it can't be fed into non-essential

### Grid-tie

Cost: R8k~16k  
Solar Panels, no battery.  
https://www.solar-shop.co.za/102-solis-grid-tie-inverters

This feeds electricity into your whole household, the drawback is that if Eskom goes offline, so too does the inverter and solar power (this is to protect electricians working in the street from being electrocuted from any feedback)

These do not support batteries. So these are purely for reducing your electricity bill. You install solar panels + inverter and you're done. During daylight most or all of your power will be from solar, during the night it will be from Eskom. During loadshedding you will have no power.

Pros:

- Cheap

Cons:

- No battery
- No solar power if eskom is offline

### Hybrid

Cost: R25k~R55k  
Solar Panels, Grid Tie, Battery.  
https://www.solar-shop.co.za/95-sunsynk-deye-hybrid-inverters

This will feed electricity into the whole house and when Eskom goes offline it will supply an "essential" load with power from the battery and the solar will be disconnected from the house and connected to the battery (so you run off solar while eskom is offline).

The Sunsynk brand inverters have become very popular. They have a good warranty, good support and some amazing features and at a very good price point.

Deye is the exact same hardware as the Sunsynk, just a different brand. They are also excellent.

Pros:

- Acts as both an off-grid/ups inverter as well as a grid-tie inverter at the same time
- When eskom is offline the grid-tie is disconnected but the essential circuit can still run off solar + battery
- Sunynk/Deye specific: Supports a high "pass-through" current when eskom is online. Basically a 5kW inverter can support more than 5kW on the essential side when eskom is online, and limits to 5kW when eskom is offline.
- Sunsynk specific: Has support for a generator, wind turbine or micro-inverter to add additional power to the system.
  Cons:
- More expensive

### Some extra notes on Essential load vs grid-tie

Inverters have a power rating in kW. e.g. our Inverter is a 5kW one. This means it can supply a maximum of 5kW (5,000W) at any time. For example a computer can use around 200W to run. A microwave 1,400W, a kettle 3kW, a geyser 4kW+. If one has too many things connected and you draw more than 5,000W, then the inverter will turn itself off and potentially you will have problems. So it's important to size an inverter correctly. The size also determines how many panels you can connect. It doesn't work to have a 3kW inverter and 8kW of solar panels. You can however have less panels. e.g. 8kW inverter and 2kW of solar panels.

The "essential load" is all your electrical circuits/plugs connected directly to the inverter.

For an off-grid/axpert inverter, ONLY the essential load is powered by solar and battery. This usually means large items like ovens, geysers, etc. do not get connected (unless very large inverters are installed or multiple working together).

A grid-tie inverter does not have an essential load, it puts as much power as it can into the entire house. If your house uses 12kW at 11am and the grid-tie only has 3kW of solar, then 3kW gets used from solar and the remaining 9kW comes from Eskom.

A hybrid inverter has an essential load which you connect to everything you want to run off battery. So you put your computers, tv, lights, etc. on the essential side and washing machines, kettles, geyser stay on the normal house power. When eskom is up, the hybrid inverter pushes as much solar as possible into the whole house. When eskom is offline, it disconnects the solar from the house and connects it to the essential side. The essential side then gets battery + solar power.
