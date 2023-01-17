This is a collection of knowledge I've gathered over the last 2 years about solar systems, inverters, batteries, etc.

Financing Options

Paying cash is obviously the best, but very few people can afford that. Below are the best to worst ways to finance your solar system.
Extending Home Loan - This is the best way if possible. The interest on your home-loan is WAY lower than any other loan related way to pay for solar.
Solar financing loan from the bank. Some of the banks have started offering loans specifically for financing solar systems. Always check the interest rates and look out for things like balloon payments.
Rent-to-own solar offer. I'm not sure if there's currently any in South Africa, but a good option is where they install for free and you pay them monthly for a number of years. After usually 8 years you then own the solar system. It works out more costly that the above 2 options but it means you don't need any starting capital.
Options to avoid:
Rent-only solar offer. A lot of these have popped up recently in SA. They initially look like rent-to-own solutions but in the fine print they are actually rent-only. At the end of the day they will cost you more monthly than your current eskom bill instead of reducing it.
Normal loan from the bank. The interest rates are too high. You'll land up paying triple than any other option.

More Technical information

Below is a lot more technical information. Some of the pricing is a little outdated, but it should be roughly similar. The website(s) linked will help give more recent pricing.

Link for validating prices: https://www.solar-shop.co.za/
The guy who runs Solar shop has been doing Solar systems for something like 35+ years. Very knowledgeable.
Bear in mind that equipment bought from an installer is almost guaranteed to cost more, because the installer will be handling any warranties. i.e. if you buy direct you'll save money, but if anything is faulty it's your own cost and effort to have it shipped back for warranty repair/replacement.
I find that it's invaluable for checking prices though. If someone quotes you a lot more than solar-shop, they're probably ripping you off. I'd expect probably a 10-15% more than solar-shop from an installer.

Solar Panels
Hardware cost: R2,000~R2,700 per panel
Installation cost: roughly R1,100ish per panel
Lifespan: 20+ years

Example panels (Canadian and JA panels appear to be the most common brand on all the shops):
https://www.solar-shop.co.za/53-ja-solar-panels
https://www.solar-shop.co.za/54-canadian-solar-panels

Installation cost might depend on ease or difficulty of mounting the panels on the roof.

The lifespan is not a fixed "they die in 20 years", the lifespan given actually means "after 20 years they only output 80% of their rated power".

There are some important things to note about solar panels that is not
immediately obvious:

They are connected in "strings". Typically the inverter will only support 1, maybe 2 strings of panels and will have a maximum voltage and current supported for each string. Depending on inverter limits, panel wiring can differ, usually you will get panels in an even number to support this wiring. (Panels in series increase voltage, panels in parallel increase current. e.g. for larger setups one might have 6 panels configured where there are 3 panels in series and another 3 in series and then joined together - triple the voltage, double the current).
Because all the panels are in a "string", the power output is limited by the weakest panel. So e.g. if you have 12 panels and just 1 of them gets a shadow over it (e.g. from the chimney) which results in it giving 20% power, ALL panels then limit to 20% power. So if you ever see someone with a solar setup where the chimney throws shadow on a panel or a tree covers part of them, that system is not working very well (there are solutions to this, but they all cost more money than it's worth generally)
Solar panels should ideally be facing North and at around 25deg. This is the optimal angle for South Africa. This isn't always possible, so one would get panels installed on the roof that faces as close as possible.
If your inverter supports 2 or more strings of panels, then one can do something like have 1 string facing north-east and 1 string facing north-west, giving you more power than if you only faced a single direction.

Inverters
Hardware cost: R8,000~R35,000 (depends on inverter)
Inverter installation cost: not sure. probably around R1,000-R2,500
Electrical changes: not sure. Fair amount of work (see more below)
Lifespan: 10+ years

This is where things get complicated.

First important notes/terms/features:
Max Power Output: Inverters have a maximum in kW. You need an inverter larger than the amount of power you plan on using through it. This is the maximum amount of wattage at any point in time. More than this will trip the inverter - like a breaker does.
Battery Voltage: the higher the voltage the more efficient the inverter can use the power. Most common voltages are 12V, 24V and 48V.  
MPPT strings: MPPT = Maximum Power Point Tracking. Basically it's a controller that extracts the maximum amount of power out of a solar panel string. If you only have 1 MPPT on the inverter, you can only have 1 set of solar panels. e.g. if you want to have half the panels on a different angle, you need another MPPT.
Essential circuit: This is everything connecting to a seperate DB board which is powered by the inverter. When using batteries, only the essential circuit will be powered by battery.
Grid-tie/feedback: If an inverter supports this feature, then it can provide solar to the whole house - but only while eskom is on. When eskom is off, then only the essential circuit can be powered.
Parallel Inverters: Many inverter makes support linking in parallel. So e.g. if the inverter can only do 5kW but you need to support up to 12kW of appliances, you can parallel 3 of them to give you a max of 15kW.

There are 3 main types of inverter

Off-grid / UPS
R8k~R16k
Solar Panels and/or Battery. Can charge from Eskom but cannot feed back into the non-essential circuit.
https://www.solar-shop.co.za/119-mecer-inverters

This is great for farmers, rural areas or when needing a cheap backup/solar system.
Note: The Mecer/RCA/Axpert inverters are marketed as "Hybrid" but they are not proper Hybrid, they are actually very basic and pretty poor at everything they do.
Primary recommended purpose: Loadshedding backup. One can install these without solar panels and just a battery. It then acts as a very big UPS and will recharge batteries from Eskom when there's power.
Alternative purpose: Low cost solar setup. Not recommended, but to save costs it can be used as a sort-of hybrid. It will run off solar, it will support loadshedding. What it doesn't do is feed the whole house with power. It only supplies the essential load. It's also not very good at mixing power from solar + eskom.

Ideally avoid these unless all you want is a UPS for the house.

Pros:
Cheap
Works well for being completely off-grid (no eskom)
Cons:
Poor at mixing solar and eskom
Excess solar is lost as it can't be fed into non-essential

Grid-tie
R8k~16k
Solar Panels, no battery.
https://www.solar-shop.co.za/102-solis-grid-tie-inverters

This feeds electricity into your whole household, the drawback is that if Eskom goes offline, so too does the inverter and solar power (this is to protect electricians working in the street from being electrocuted from any feedback)
These do not support batteries. So these are purely for reducing your electricity bill. You install solar panels + inverter and you're done. During daylight most or all of your power will be from solar, during the night it will be from Eskom. During loadshedding you will have no power.

Pros:
Cheap
Cons:
No battery
No solar power if eskom is offline

Hybrid
R20k~R40k
Solar Panels, Grid Tie, Battery.  
https://www.solar-shop.co.za/95-sunsynk-deye-hybrid-inverters

This will feed electricity into the whole house and when Eskom goes offline it will supply an "essential" load with power from the battery and the solar will be disconnected from the house and connected to the battery (so you run off solar while eskom is offline).

The Sunsynk brand inverters have become very popular. They have a good warranty, good support and some amazing features and at a very good price point.

Pros:
Acts as both an off-grid/ups inverter as well as a grid-tie inverter at the same time
When eskom is offline the grid-tie is disconnected but the essential circuit can still run off solar + battery
Sunynk specific: Supports a high "pass-through" current when eskom is online. Basically a 5kW inverter can support more than 5kW on the essential side when eskom is online, and limits to 5kW when eskom is offline.
Sunsynk specific: Has support for a wind turbine or generator or micro-inverter to add additional power to the system.
Cons:
More expensive

Some extra notes on Essential load vs grid-tie
Inverters have a power rating in kW. e.g. our Inverter is a 5kW one. This means it can supply a maximum of 5kW (5,000W) at any time. For example a computer can use around 200W to run. A microwave 1,400W, a kettle 3kW, a geyser 4kW+. If one has too many things connected and you draw more than 5,000W, then the inverter will turn itself off and potentially you will have problems. So it's important to size an inverter correctly. The size also determines how many panels you can connect. It doesn't work to have a 3kW inverter and 8kW of solar panels. You can however have less panels. e.g. 8kW inverter and 2kW of solar panels.

The "essential load" is all your electrical circuits/plugs connected directly to the inverter.

For an off-grid inverter, ONLY the essential load is powered by solar and battery. This usually means large items like ovens, geysers, etc. do not get connected (unless very large inverters are installed or multiple working together).

A grid-tie inverter does not have an essential load, it puts as much power as it can into the entire house. If your house uses 12kW at 11am and the grid-tie only has 3kW of solar, then 3kW gets used from solar and the remaining 9kW comes from Eskom.

A hybrid inverter has an essential load which you connect to everything you want to run off battery. So you put your computers, tv, lights, etc. on the essential side and washing machines, kettles, geyser stay on the normal house power. When eskom is up, the hybrid inverter pushes as much solar as possible into the whole house. When eskom is offline, it disconnects the solar from the house and connects it to the essential side. The essential side then gets battery + solar power.

Electrical changes
I'm not sure of the extend of the changes as the electrical side was done when we bought the house, but from what I understand a solar installer will do the following in the process:
Split your DB into 2 DBs
Old DB = non-essentials and high-power items. e.g. geyser, kettle, stove
New DB = essentials (basically everything that will run on battery). In our case this is every light breaker and at least 1 plug point per room.
As part of the inverter installation there will be additional stuff such as fuse for battery, breakers for solar panels, inverter, etc, and changeovers for things like if you need to bypass the inverter.

Batteries
Hardware cost: R24,000+
Installation cost: usually bundled in with inverter installation
Lifespan: 2-10+ years

There's a wide range of battery brands and types.

The different battery types typically used:
Lead Acid or AGM. Lifespan < 2 years. Lead acid will leak hydrogen when charging, so needs to be ventilated. AGM is sealed, so can be installed anywhere.
https://www.solar-shop.co.za/45-lead-acid
Lithium-ion. Lifespan 5-8 years (typically). These are larger battery banks with advanced electronics to protect the battery. They can normally do 3,000+ cycles (cycle = drain and recharge). They should not be drained below 50% or lifespan drops drastically (like down to 300 cycles). They are also limited in how much power they can output at once. e.g. a 2kWh battery can only supply 1kW of power at a time to devices.
https://www.solar-shop.co.za/73-pylontech
LifePO4 (Lithium-Iron-Phosphate). Lifespan 10+ years. These look similar to Lithium-ion, are often just called "Lithium" but are newer and better. They do 6,000+ cycles if you drain down to 80%. They will still do 3,000+ cycles if you drain to 0% (completely flat). They also can supply the full power rating. So a 2kWh can supply 2kW of power at a time.
https://www.solar-shop.co.za/109-shoto
https://www.solar-shop.co.za/111-hubble

Batteries can all get very complicated, but pretty much it boils down to the following tips:
Battery voltages must match the inverter voltage. Small inverters (particularly the off-grid/axpert ones) will sometimes be 12V or 24V. Most 5kW+ inverters will use 48V. LeadAcid/AGM/some Lithium batteries come in 12V. If you need 24V you connect 2 batteries in series. If you need 48V you need 4 in series. The bigger batteries will come in 48V normally.
LifePO4 is the best solution for a solar home. Will last the longest, supply the most and lands up cheaper than all other ones when you factor in all the maths.
Adding batteries means it costs you the same or more than sticking with Eskom. Add batteries to survive loadshedding or to go completely off-grid. Don't do it for financial reasons.
The less often a battery cycles, the longer it will last. So even a Lead-acid could last 5 years if it's not cycled daily. A LifePO4 that is only cycled during loadshedding could potentially last 20 years or more.

My personal recommendation is to only look at LifePO4 batteries, and NOT to get Pylontech brand. Pylontech is a very good brand, very respected and pushed by most installers but they are no longer competitive with the newer LifePO4 lithium batteries.

First, there are multiple "Lithium" types of batteries. The pylontechs use a different lithium chemistry to the LifePO4 ones. LifePO4 has the following pros that pylontech cannot match:
Can discharge to 0%. Pylontech will void your warranty if you do this. In fact they will void warranty if you discharge below 50%. LifePO4 will have reduced lifespan at 0%, but you will still get 3,000 cycles out of it (about 8 years).
Can discharge at 1C. This means a 4.8kWh lifePO4 battery can discharge 4,800W in an hour with no issues. Pylontech can only discharge at 0.5C. So a 4.8kW pylontech can only provide up to 2,400W of power. Meaning you need 2 of them for a 4.8kW inverter. Also, if you force it to discharge higher than 0.5C you void the warranty.

Feeding back into Eskom/CoCT
Currently this is not worthwhile at all. In other countries this works very well, you feed back extra solar during the day to the power company at a reduced rate and at night you pay for getting power back from them.

Due to regulations, Eskom monopoly, etc. it's not viable in SA yet, even though it's allowed.
To feed back currently in CoCT:
You have to pay R12k for them to install a special pre-paid meter allowing you to feed back.
You have to pay a monthly fee for the "benefit of selling your power". I think this is around R150 or R250 per month.
CoCT will pay you R0.25 per kWh you give them.
CoCT will charge you R2.40 per kWh you take from them.
You have to be a 'net consumer'. This means you have to use more electricity than you give them. i.e. If you use 100kWh from CoCT over the year, they will only pay you back for up to100kWh of Solar you give them. If you give them 300kWh, the remaining 200kWh they take for free.
In comparison, in Australia they also require the net-consumer rule. However they pay 50% of the price per kWh. If CoCT did this it would mean you get a credit of R1.20 per kWh you send to the city.

Registration with CoCT
Your solar installer will assist with this but will likely charge for the admin work. If you're happy to do the admin work yourself you can save a few grand. Involves filling in documents (solar installer will probably do this bit for you for free) and then submitting, correcting, updating, jumping through hoops for the CoCT department. Once approved the installation can happen and afterwards they will send an inspector to verify everything is up to code.

There is a fee from CoCT but I can't recall what it is. I don't recall it being high.

Partial installation options
You can opt to install half a system initially if it make sense budget wise, although bearing in mind some installation costs would land up being duplicated when adding the 2nd half later.

e.g. you could install inverter + battery only to survive loadshedding. Then later on have the solar panels installed. Or you could install inverter + solar panels and install a battery later on.

Potential cost savings

Calculating how much power one can save is no easy task. Even after having graphs and numbers to play with I still don't have a perfect excel sheet, but I will give you hopefully sufficient information to help you get a rough estimate.

These are based on personal experience and may differ for you:
About 40% of our usage is outside of sunlight times. So if you use say 20kWh per day, no amount of solar panels on their own will cover the full 20kWh unless you have sufficient batteries.
Batteries are expensive and not really a cost saving (although latest eskom increase means they're a few cents cheaper per kWh than eskom now), so buying extra batteries to "use the additional solar power" might be a wasted expense.
If you're on Eskom directly, you'll be paying a much cheaper rate than CoCT and you need to adjust calculations accordingly.

We use approx. 20-25kWh per day.
A 2kW set of panels is producing about 6-8kWh of power per day in winter and 10-12kWh in summer.
At CoCT rates for 2020, R2.10 per kWh, this meant up to R26 saving per day (R750/month)
At CoCT rates for 2021, R2.40 per kWh that means even more.
If you use more than 600kWh per month, it also means the units over the first 600 are even higher, 2021 rates are R3.32/kWh.
This means if your solar can reduce your eskom usage below 600kWh per month, you save a lot.

I'd recommend basing the savings being on around 50% of your bill.
Using excel you can try extrapolate to cater for increases in Eskom rates and to figure out savings per year.

In general, if you are specifically looking at the savings, you are probably looking at 10-14 years to recover the cost of the system - if eskom doesn't increase prices. If eskom increases by 15% each year that drops to < 7 years.
