// ==UserScript==
// @name         Contest Auto-Entry
// @namespace    local
// @version      1.4
// @description  Fills and submits the contest signup form for a list of your own email aliases, at a human-like pace, resuming where it left off. Runs in your real browser session.
// @match        https://www.pokemoncenter.com/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // ============================ CONFIG — EDIT THESE ============================

  // Your email aliases. Paste them here, one per line inside the backticks.
  const EMAILS = `
halibut.neural-7g@icloud.com
perm_cues.3n@icloud.com
mosque.mansion.6p@icloud.com
canyons.hardier.5y@icloud.com
canon.revels-4g@icloud.com
combine-fond-6f@icloud.com
records-stated-4y@icloud.com
tinned-audial.1j@icloud.com
proven-chorale-9a@icloud.com
raven-buyouts2a@icloud.com
armor.toolkit_5w@icloud.com
42-scrapie.ergot@icloud.com
maidens_scuffs.3w@icloud.com
macaw_diptych03@icloud.com
noble.arrival3c@icloud.com
lamp-draw5i@icloud.com
12.poussin_fracas@icloud.com
fluency-seal3f@icloud.com
etch64.faiths@icloud.com
singlet_oxtail_1o@icloud.com
request.ooze-8d@icloud.com
reunion-25blitzes@icloud.com
peanuts.loris_6f@icloud.com
fitness-healthy-0o@icloud.com
worrier.49-dosage@icloud.com
shutout.lordly.3p@icloud.com
squalor.fiefdom.3f@icloud.com
cog-shekel0q@icloud.com
cotton.treetop_0f@icloud.com
tangelo.raisins.7p@icloud.com
canyons_brevets57@icloud.com
outing.swoop0x@icloud.com
nugget.drift9h@icloud.com
sander_pastry.3g@icloud.com
fours.thunder_5x@icloud.com
fares.bronzed6m@icloud.com
gimme_ready.0r@icloud.com
lily.shocks-8o@icloud.com
winters.things_6n@icloud.com
cloves8.hives@icloud.com
abbey.beguine.8l@icloud.com
diopter43_ravioli@icloud.com
fuller-cask6e@icloud.com
amalgam-premier5@icloud.com
donuts.graces-02@icloud.com
lepton-courts4a@icloud.com
trope.whinier-4a@icloud.com
kippers_sines9k@icloud.com
asunder_ever7l@icloud.com
baklava.cacao-8m@icloud.com
lodger.choices1c@icloud.com
troika.rocks-0b@icloud.com
specter-extreme86@icloud.com
ribbed.nutria.6x@icloud.com
wharves.koalas-3l@icloud.com
sire-quit.3d@icloud.com
airship-reviews.0t@icloud.com
upbeats_let8x@icloud.com
thrums-lambing-9e@icloud.com
lament.reducer-8c@icloud.com
invites-decor0r@icloud.com
yuppies_turtle9s@icloud.com
couches_slits_9d@icloud.com
adapt.slew_9c@icloud.com
meander-zillion3s@icloud.com
oyster-igneous-0q@icloud.com
smithy.topside06@icloud.com
ungodly.vet-5n@icloud.com
ibexes.sniff4j@icloud.com
casings.maxim-4b@icloud.com
veers.armhole2m@icloud.com
28-soused.staging@icloud.com
pearled.coeval-94@icloud.com
twins-ketones7b@icloud.com
host-crosse-9o@icloud.com
sleepy.secrecy-3r@icloud.com
glands.limpid4p@icloud.com
gaff-tilbury3c@icloud.com
manias-cairns-6c@icloud.com
bureaus_fibers7a@icloud.com
exempt_oilier2a@icloud.com
troll_claim4e@icloud.com
leak.toad7t@icloud.com
dynamic-masker-08@icloud.com
jollier_rivet_5k@icloud.com
misfits.subdued3p@icloud.com
travail.ballads.8p@icloud.com
98chumps-torrent@icloud.com
dells.tepid.9p@icloud.com
poets_tassels28@icloud.com
trooper.padlock3a@icloud.com
cooker.devoted_8v@icloud.com
feints-anthems5h@icloud.com
quacks.gages_7f@icloud.com
hungers-forte.4r@icloud.com
heirs_exurbia7j@icloud.com
pylons_icon76@icloud.com
call_alp_3y@icloud.com
hart_current.6r@icloud.com
zeros.48.czarist@icloud.com
sluice-stupors-7i@icloud.com
smiley_ruffle_2p@icloud.com
6guppies-nonstop@icloud.com
stripy-59.rule@icloud.com
62-cot-splint@icloud.com
07.qualms.singlet@icloud.com
futile.dubnium-3h@icloud.com
bulgar-aged0x@icloud.com
onside_public_3k@icloud.com
maltose.elixir.0z@icloud.com
sledge.yogic7w@icloud.com
renters.bascule-0r@icloud.com
chase-ovens3j@icloud.com
fill.mobs-7j@icloud.com
den-gully-3l@icloud.com
tap.pioneer_0r@icloud.com
gourdes-ulna.0k@icloud.com
buttes.tortes_1s@icloud.com
sleeves.warmest-9l@icloud.com
welders.slobber.5p@icloud.com
clots-likings.8y@icloud.com
pepsin.dermis19@icloud.com
blabber.solaria_0h@icloud.com
annuals_olive_6f@icloud.com
mulch_pique5q@icloud.com
wiry-halter7m@icloud.com
jovial_dryer.5d@icloud.com
peptide_foul_4w@icloud.com
mustang.kilts_5y@icloud.com
scherzo.65.eights@icloud.com
apply-flora-1v@icloud.com
tickets.strict9z@icloud.com
washers_flicker.7m@icloud.com
postbox.zippers5r@icloud.com
family.zest-3a@icloud.com
impulse.1garnish@icloud.com
vest.minke1q@icloud.com
spears-undo.5e@icloud.com
worries_gears47@icloud.com
guitar-sim-2z@icloud.com
skid-splashy6a@icloud.com
drought-moon-8t@icloud.com
doubles-mushy-9p@icloud.com
strums_wishers.8e@icloud.com
crupper.prone-1r@icloud.com
avid_jujutsu93@icloud.com
nitro-harts.5u@icloud.com
discus34_matter@icloud.com
smelt_learner_3r@icloud.com
70-swoon-mailing@icloud.com
diverse-brewer.2f@icloud.com
cancans.sweeter_5n@icloud.com
75.muons_skill@icloud.com
wrings58_splurge@icloud.com
agile25_resort@icloud.com
bulgier.sips-14@icloud.com
midterm.writ_4g@icloud.com
clad_spices_9o@icloud.com
iodide-hiders-4s@icloud.com
lanais.iconic5x@icloud.com
pothole-wham-9@icloud.com
joggers-limited-4j@icloud.com
spots.stands_5i@icloud.com
54_impost.cypress@icloud.com
basket.covey_8s@icloud.com
camp-longish-9a@icloud.com
ability50_ghastly@icloud.com
inlets_ire.5t@icloud.com
fearful_swags.0c@icloud.com
pink.bases2a@icloud.com
advisor_gloat.8x@icloud.com
42holds_prance@icloud.com
novelty_jouster3n@icloud.com
sorters-tahini9q@icloud.com
units-tracers.1l@icloud.com
gabby_theme_2y@icloud.com
makes.hadron9m@icloud.com
speedy-overall.2v@icloud.com
cat_humble9@icloud.com
92flights_post@icloud.com
mystery-leis9m@icloud.com
primer.steers5y@icloud.com
celery_demotic1r@icloud.com
hovel04faerie@icloud.com
94baryon-wily@icloud.com
sloops.quire8o@icloud.com
epoch-disdain-3g@icloud.com
later_veld_6n@icloud.com
are.rumba.2z@icloud.com
towpath-lungful-60@icloud.com
grocer_jowls5a@icloud.com
life.pea.8b@icloud.com
rampart-past-3e@icloud.com
unsaved_stoker14@icloud.com
juicier.quaff_7l@icloud.com
66_floods.crooked@icloud.com
molt-trickle.4t@icloud.com
quays.tings_3y@icloud.com
7.deans-trowel@icloud.com
56_messier.evasion@icloud.com
skunk.kin8w@icloud.com
loosest_meet_6z@icloud.com
plantar-dodder.0o@icloud.com
forge_parish8j@icloud.com
unmixed_riskier0u@icloud.com
unnamed-char.2y@icloud.com
faerie.28chapels@icloud.com
troupes-methane-47@icloud.com
moniker-vermin-1m@icloud.com
alveoli.spikes.3k@icloud.com
carafes-minicam-9s@icloud.com
clinic_headers_1d@icloud.com
bring76_apogees@icloud.com
duffles53brogans@icloud.com
eatery-cave2v@icloud.com
limiter_commute6s@icloud.com
fonts-beau-5z@icloud.com
regents_88sign@icloud.com
halyard-shiners-7w@icloud.com
cure_thump_6z@icloud.com
caustic-inviter2y@icloud.com
frugal65_creed@icloud.com
swagger.13scarves@icloud.com
formats_toaster.3m@icloud.com
gin_tailed.3y@icloud.com
license-mack5d@icloud.com
trifle.bolt.1k@icloud.com
tautest_sturdy9y@icloud.com
rears_addenda4l@icloud.com
maxima-era77@icloud.com
amulet.vacancy0a@icloud.com
28.errors_gelatos@icloud.com
squalid-60.shyness@icloud.com
bigger.spangly.1m@icloud.com
60parcel_oboe@icloud.com
crackle-linen9x@icloud.com
bistro-stylist1f@icloud.com
wraps_finance.7n@icloud.com
gardens_front4l@icloud.com
flushes_sines_5j@icloud.com
decors17.moniker@icloud.com
rotors_airport_8v@icloud.com
chugs.phoebe-6u@icloud.com
snidest_moments.9r@icloud.com
region.lambs2e@icloud.com
70.sigmas.motto@icloud.com
flattop-skein-44@icloud.com
burdens-stacker-5b@icloud.com
adore_labels.73@icloud.com
canals.roomier_5b@icloud.com
echos_tint4o@icloud.com
planner.spouts.1n@icloud.com
divine-jut-8k@icloud.com
dioxins-14wound@icloud.com
manor-frappe86@icloud.com
wonton.savoy.3h@icloud.com
05-tonic-shreds@icloud.com
cognate.sappier_4z@icloud.com
sulfa_inflow.9u@icloud.com
locks_takers7x@icloud.com
valid.flyby7i@icloud.com
polkas_sleeper_8t@icloud.com
math_seer9t@icloud.com
dashers_oceans_7c@icloud.com
kiosks.62sages@icloud.com
mixer_russet_9w@icloud.com
pyrites_grapes.0l@icloud.com
drover_globs_4s@icloud.com
86.spork-decoder@icloud.com
chutes.duality-3k@icloud.com
churn.91-bling@icloud.com
paella.hilts-0t@icloud.com
seams.busts_20@icloud.com
utopias.bit82@icloud.com
agendas.lockout_2b@icloud.com
guts.possums3a@icloud.com
puritan-krakens.6c@icloud.com
column-cations3f@icloud.com
novels.fables.7g@icloud.com
ammeter.unlit.0t@icloud.com
paring_spirit_2h@icloud.com
cousin.funnels_2r@icloud.com
wallows_don.9b@icloud.com
94spirits-datum@icloud.com
gapes.tycoons5r@icloud.com
rosters.wombat_7q@icloud.com
mirth.36.pug@icloud.com
exhaust_motile0q@icloud.com
pretext-neat-5h@icloud.com
chill.gelatin_8p@icloud.com
belugas.modesty9x@icloud.com
42_specks.pine@icloud.com
draftee-balms-4f@icloud.com
pike-benches1c@icloud.com
advance.bodkin.2k@icloud.com
essays-draggy.3y@icloud.com
pickups.04model@icloud.com
aisle-limp38@icloud.com
strict_mime_0r@icloud.com
faddish-creeds4g@icloud.com
pique-couches3u@icloud.com
breaks-florist-3l@icloud.com
gravies-wetland-6w@icloud.com
deer.paddy_2m@icloud.com
dustier.gala35@icloud.com
44_morays_shiver@icloud.com
metal.21.munchie@icloud.com
stack_inroad8h@icloud.com
banjos.kook0k@icloud.com
postfix-diviner8g@icloud.com
advert-gannets.7n@icloud.com
capons.poised5s@icloud.com
tassel.offices.3e@icloud.com
kennel.commute.8b@icloud.com
ajar.eyrie.0y@icloud.com
targets_whirs_0q@icloud.com
bravo_fuel_2o@icloud.com
height-defy4v@icloud.com
swirls_snares_1y@icloud.com
chancel.distal5t@icloud.com
hoarse_58wrap@icloud.com
grow-99-cod@icloud.com
dust.arsenic7c@icloud.com
foster-86.angler@icloud.com
hearers_ripe_1n@icloud.com
misses-forager.5l@icloud.com
deeper.lambdas-5r@icloud.com
insect57.purgers@icloud.com
faceted_kiddie.5d@icloud.com
ate.polite-5l@icloud.com
auroras_slough77@icloud.com
politer-butane.9c@icloud.com
images_sorbets6l@icloud.com
10.prows.cactus@icloud.com
saner55torsion@icloud.com
amine.moloch.3q@icloud.com
must-lodgers.21@icloud.com
strops-38touches@icloud.com
nub.hirer_3u@icloud.com
loaves-bales-6w@icloud.com
preload-jitters.4r@icloud.com
jicamas.steeple-8k@icloud.com
fallows_sublet7j@icloud.com
dibble.filters-4e@icloud.com
waders_gasbags_7f@icloud.com
prime.generic_6j@icloud.com
remixes.lever0l@icloud.com
dirks_mugger1x@icloud.com
waifs-proverb-95@icloud.com
codec-vote4s@icloud.com
desert_cabaret_7k@icloud.com
squib.dinette-6m@icloud.com
ermines_shea_4z@icloud.com
angora_bullish.9j@icloud.com
dean.waves7r@icloud.com
4_dill.waiver@icloud.com
novena.rift_7a@icloud.com
zebras.tackles_7b@icloud.com
ladder.unrest-8d@icloud.com
mentee-spout6j@icloud.com
88.kimonos-airship@icloud.com
muddles.blemish.4r@icloud.com
whaling-themes-7x@icloud.com
pause-bolder-16@icloud.com
zag-bread9r@icloud.com
rambles-parched6y@icloud.com
24unease-stasis@icloud.com
earplug-comma3q@icloud.com
organdy.inning3o@icloud.com
daze.spots_9f@icloud.com
bedbug_nests.7p@icloud.com
priory-prawns-2c@icloud.com
delta_decals_1g@icloud.com
logs_59_earshot@icloud.com
64-rumbles.spoken@icloud.com
lie_47odder@icloud.com
bailout.discard_3r@icloud.com
forbear98_bolster@icloud.com
pipe-32.expat@icloud.com
lushes_cadmium1u@icloud.com
42-barista.witting@icloud.com
paydays53_falls@icloud.com
redcaps-carry-2g@icloud.com
mosque_cutlet.3e@icloud.com
flaw_rabbles_3s@icloud.com
strands-scarfs.5e@icloud.com
profuse.hoof-2i@icloud.com
cornrow.finance-5w@icloud.com
cage.curved58@icloud.com
preppy_toll_4m@icloud.com
pivotal.crashes_9f@icloud.com
tilers.bricks.4x@icloud.com
sunup.imports.42@icloud.com
doable-dither.2l@icloud.com
brandy_civic.0q@icloud.com
pickax-32-passer@icloud.com
rail-03.cram@icloud.com
larceny.boats.8a@icloud.com
crux.creases_5m@icloud.com
loss.word3a@icloud.com
34.lager.affine@icloud.com
lump-band0d@icloud.com
quilted.thorns-8i@icloud.com
chair.aspens-53@icloud.com
sauce_tar.8t@icloud.com
dowel-scrapie.9z@icloud.com
jotting_creole_7@icloud.com
flans.34cocos@icloud.com
tithes.1heft@icloud.com
crater_cheroot_8t@icloud.com
undo-cover.3h@icloud.com
doing_arks.4e@icloud.com
taxes_pylon9h@icloud.com
bleary-suffix-09@icloud.com
hotshot.pied_63@icloud.com
miner.tannery8p@icloud.com
zaps_eaters_6f@icloud.com
31.bulky_vine@icloud.com
trots.berserk8v@icloud.com
scenery.platoon5r@icloud.com
ageless_snare7y@icloud.com
studded_clump_0d@icloud.com
57_infant.baked@icloud.com
gear_scrub12@icloud.com
nougats_answer9a@icloud.com
forkful.henna.4g@icloud.com
outs-tsetse-5y@icloud.com
chute.ampere_6b@icloud.com
fresco-voices.5j@icloud.com
soldier.maskers-3l@icloud.com
wort.cruets.6w@icloud.com
fixings.howl_1u@icloud.com
valor.alt.2l@icloud.com
ratchet.galette.3q@icloud.com
saver-letdown-6v@icloud.com
default-noisy5e@icloud.com
affixes.comers_7b@icloud.com
91halberd_towhead@icloud.com
revise.acrobat.6h@icloud.com
glottal.rovers0e@icloud.com
doctors.today.1a@icloud.com
motel-carders4w@icloud.com
blogs-foppish.5d@icloud.com
privets.barre.9p@icloud.com
flawed.strange.5t@icloud.com
broom-elfin5e@icloud.com
challah-normals46@icloud.com
daubers_10_tyke@icloud.com
11chard-dioxin@icloud.com
nimble.onus_49@icloud.com
collage-poodles.1s@icloud.com
sandlot.salvo.1o@icloud.com
adder_gyro.0b@icloud.com
dryers_sealer4o@icloud.com
ante-ramen.3e@icloud.com
16.ascot-tundra@icloud.com
bushel-brine.7v@icloud.com
showery.08.payment@icloud.com
corns-gigs.5x@icloud.com
falls.13.statute@icloud.com
3.gambits_ascots@icloud.com
knitter_ocelots4b@icloud.com
slipped_cognacs_6m@icloud.com
remand.smarts6v@icloud.com
higher-magi.1l@icloud.com
stripy-arrests.6r@icloud.com
broader.listen.2e@icloud.com
40.roomed.reverie@icloud.com
story.blanket-7u@icloud.com
staff88.cockle@icloud.com
mambos.nebular_0c@icloud.com
octanes-tot.1b@icloud.com
tartar_corns60@icloud.com
ice-grit.2a@icloud.com
ribbons_debtors.9i@icloud.com
tenons_outfit.4e@icloud.com
aquifer_06_messes@icloud.com
amen-retinue2t@icloud.com
67-south.patters@icloud.com
wince-aged0r@icloud.com
amulet-prenup-00@icloud.com
tours-08lounger@icloud.com
cobbler_bites_8b@icloud.com
95concise-dusky@icloud.com
roll-sleeper.6l@icloud.com
chief_poxes_9k@icloud.com
stripy.flashy_2w@icloud.com
13piers_fajita@icloud.com
con.pattens-0m@icloud.com
pigskin_stalest2p@icloud.com
serapes-topped.5k@icloud.com
salty-jays-8y@icloud.com
prices.pitas.3s@icloud.com
racks-gaze-8@icloud.com
fjord-sacra9t@icloud.com
bulgy_placket1q@icloud.com
muscles_flips2l@icloud.com
facile_fruity_2w@icloud.com
obj-yantras.7t@icloud.com
cement.anybody5o@icloud.com
72jitters.inanity@icloud.com
for.stokers_2z@icloud.com
twine_arsenal_8b@icloud.com
nursing.going8b@icloud.com
grabber_studios0o@icloud.com
fissile-steer6z@icloud.com
warts_41_geisha@icloud.com
hark-cement3p@icloud.com
count.prod-8b@icloud.com
lodge.snoozes-0i@icloud.com
lap-maroon32@icloud.com
roofers_abuzz.0m@icloud.com
tendons-pies.0d@icloud.com
sheave.farrier.1z@icloud.com
costar.fervent8m@icloud.com
spines-tasty-2t@icloud.com
dado_field6c@icloud.com
knoll.sapless2b@icloud.com
offhand_poverty9e@icloud.com
flat-stadium.2y@icloud.com
knobby_standee.3y@icloud.com
72.tourney_chest@icloud.com
puddle-eddy.3r@icloud.com
phenol_driven.2z@icloud.com
ply-bucks33@icloud.com
wags.vertex_9d@icloud.com
pivotal-trust-3e@icloud.com
eater_fenders6k@icloud.com
statute-marker4l@icloud.com
uncut.bauds.0u@icloud.com
schemas.glands.6m@icloud.com
scalene.hoofed.9c@icloud.com
deposit_warmer_0r@icloud.com
wants.jicama_17@icloud.com
strides.cubist.3l@icloud.com
tot-proffer-8l@icloud.com
8.clip_lushes@icloud.com
pleura_gimmes.3x@icloud.com
hauler-85.honeys@icloud.com
swampy_napped.9w@icloud.com
showman.cases.4k@icloud.com
limp_62_wavelet@icloud.com
pizza99.payers@icloud.com
annex_slowest_0m@icloud.com
sweep-gantry7o@icloud.com
passer.taps-3b@icloud.com
krill_ethics.2b@icloud.com
74.outlet_put@icloud.com
plot.else_1s@icloud.com
lookup.motor_9u@icloud.com
girders-layups.6a@icloud.com
swallow-helpers.6k@icloud.com
oasis_plummet5g@icloud.com
puzzled.gruel_0d@icloud.com
vesting.neural-0z@icloud.com
drastic.pronged.5x@icloud.com
neglect.sputter_7c@icloud.com
grumble-wort-7c@icloud.com
mix.globe3o@icloud.com
sirens-cops.3x@icloud.com
obtuse.parity-0p@icloud.com
40-corkers.peptic@icloud.com
slender.vilest_3i@icloud.com
tigress_cowbird9k@icloud.com
outfall-00.mega@icloud.com
facade-nits-8q@icloud.com
weld-player.5g@icloud.com
signups.decider.70@icloud.com
rattle.image-4b@icloud.com
flabby40_secrecy@icloud.com
snugger_flags_3d@icloud.com
chest.gluey.0j@icloud.com
taking.lager_0i@icloud.com
pouch-causal.7b@icloud.com
stellar_blades83@icloud.com
tamest_peri.7n@icloud.com
beaked.easels_8b@icloud.com
grim_comas5i@icloud.com
lord_spartan.3i@icloud.com
wug_bonobo6k@icloud.com
59boorish_trends@icloud.com
annuli.cord_30@icloud.com
reuses.duvets.0p@icloud.com
legions.helmed_7x@icloud.com
shrub_gels_0y@icloud.com
toyed.pacer-3i@icloud.com
libels_skiing5y@icloud.com
neatest_patient.5j@icloud.com
upsilon_complex_8f@icloud.com
boogies.86.admin@icloud.com
pistons.jives-2d@icloud.com
rackets-volleys-8x@icloud.com
users.varied-9p@icloud.com
finales_logins_9r@icloud.com
bolt_beater_2b@icloud.com
midsole_acetate_7p@icloud.com
melon_galena.1f@icloud.com
campo_student_2c@icloud.com
capote_shimmy_8u@icloud.com
85trie_insects@icloud.com
undead-60.foibles@icloud.com
patty.toasty-9f@icloud.com
dives.chesty_5t@icloud.com
fee.lire.8g@icloud.com
ref_coaxial.1j@icloud.com
squinty_oven9f@icloud.com
69lyric_dogfish@icloud.com
true-basalts-2g@icloud.com
scarce_mopier0j@icloud.com
solid.cowled6h@icloud.com
plumper_numeric_6@icloud.com
coup_heart.43@icloud.com
keno.untold.1x@icloud.com
marinas.turnkey-4w@icloud.com
thistle-strands.3p@icloud.com
lettuce.reactor.8i@icloud.com
teas-kitties.2j@icloud.com
yoke-muses1e@icloud.com
20pronged_root@icloud.com
phony.scruffs7v@icloud.com
sixths-anagram3k@icloud.com
tracery_leak.3p@icloud.com
sound_careers.3v@icloud.com
graven.37ranges@icloud.com
smitten32_rental@icloud.com
gorge_stoop_2d@icloud.com
47-whips-seabeds@icloud.com
hound.quasar.9v@icloud.com
soul.legroom8l@icloud.com
vogue_caraway8r@icloud.com
stubble-slat.0w@icloud.com
orators.coinage.8x@icloud.com
bringer-tarts0l@icloud.com
subtle_piercer15@icloud.com
bronco.nous.1e@icloud.com
skiing.safer.5g@icloud.com
cupolas-bank.0k@icloud.com
ragweed-motels6s@icloud.com
mosaic.afoot_12@icloud.com
fader-fault6u@icloud.com
murks-loyalty9k@icloud.com
phaeton-wilier.4k@icloud.com
quartz_quoted.92@icloud.com
choosy-picks7c@icloud.com
muskets.slammer_1k@icloud.com
equine_swirl_8n@icloud.com
4fill_swag@icloud.com
analogy.memento8w@icloud.com
abbeys-finest-5d@icloud.com
fang.fishier-0u@icloud.com
smitten87_label@icloud.com
slides.errant2w@icloud.com
jogs-primers.0n@icloud.com
hoof_trust_6s@icloud.com
despair.malty-8p@icloud.com
riffs_jokiest2c@icloud.com
arches.genders-2i@icloud.com
eaters.caller-5p@icloud.com
haggle.cowled.2q@icloud.com
breaths.56-apogees@icloud.com
felts-edges1r@icloud.com
oddness_motor92@icloud.com
spawns-extinct-9e@icloud.com
scene0lesson@icloud.com
stamp-58-frolics@icloud.com
mammal_midline0k@icloud.com
samosas.buzzer-8j@icloud.com
fondant.harbor-7e@icloud.com
waltzer.rocket.7o@icloud.com
cedar_zigzag3m@icloud.com
synths-corbels-6l@icloud.com
karate_ferries_5r@icloud.com
macrons.7squat@icloud.com
gutters.touches9t@icloud.com
anybody.series-3g@icloud.com
fulcrum-ashiest.7t@icloud.com
tusk-pudgy.48@icloud.com
gunnel.lockjaw-4k@icloud.com
details-earwigs-3h@icloud.com
bloated.fateful.8u@icloud.com
hoods.premium.4y@icloud.com
torsion_aerosol.3g@icloud.com
when.hoofs-5r@icloud.com
44.carps-rots@icloud.com
debuts_hands.9c@icloud.com
vagus_gimpy.5n@icloud.com
tarpon-swan1p@icloud.com
suiting.footing8i@icloud.com
shams-breve0m@icloud.com
jaunts-stave.5a@icloud.com
cork.tarts8x@icloud.com
trebles_salmons.6o@icloud.com
strophe_origins9g@icloud.com

`.split("\n").map(s => s.trim()).filter(Boolean);

  // Date of birth. This field auto-inserts the dashes as you type, so enter
  // DIGITS ONLY in MMDDYYYY order (e.g. 01011980 = January 1, 1980).
  const DOB = "01011980";

  // Selectors. The two buttons are matched by their visible text; the fields by id.
  const OPEN_BUTTON_TEXT = "Get Email Updates";
  const SUBMIT_BUTTON_TEXT = "SIGN UP";
  const SEL_EMAIL = "#emailSignupModal";
  const SEL_DOB   = "#emailSignupBirthdate";
  const SEL_OPTIN = "#termsOfAgreement";

 // Something that only appears AFTER a successful submit (to confirm it worked).
  // Leave as null to skip the check and just proceed after submitting.
  const SUCCESS_TEXT = "successfully signed up";
 
  // The success overlay must be closed before the next entry. Set ONE of these to
  // match its close control (found via right-click -> Inspect on the real page):
  //   - CLOSE_BUTTON_TEXT: the visible text on the close/done button, e.g. "Close".
  //   - SEL_CLOSE: a CSS selector, e.g. an X icon like "[aria-label='Close']" or ".modal-close".
  // If both are set, SEL_CLOSE is tried first.
  // This is a ReactModal: it closes when you click the OVERLAY (backdrop) outside
  // the dialog box — which is the "click outside" that works by hand. We target the
  // overlay and click a point outside the content box. (The X button is unreliable
  // because the click can land on its SVG child.)
  const SEL_OVERLAY = ".ReactModal__Overlay";   // the backdrop that dismisses on click
  const SEL_DIALOG  = ".ReactModal__Content";   // the dialog box to click OUTSIDE of
  const CLOSE_BUTTON_TEXT = null;
  const SEL_CLOSE = '[data-testid="modalCloseButton"]';   // fallback if overlay-click fails
 
  // Path of the contest form page (where the "Get Email Updates" button is), so
  // the script can return there after each submit. Usually "/" or "/contest".
  const FORM_PATH = "/";
 
  // Human-like pacing (milliseconds). Generous by default; raise to go gentler.
  const WAIT_BEFORE_START = [4000, 9000];   // pause after page load before doing anything
  const WAIT_BETWEEN_STEPS = [1200, 3500];  // pause between each field/action
  const WAIT_AFTER_SUBMIT = [3000, 6000];   // pause after submit before moving on
  const TYPE_DELAY = [60, 160];             // pause between individual keystrokes
 
  // Failure handling.
  const MAX_RETRIES = 2;               // extra attempts per email after the first (3 tries total)
  const ABORT_AFTER_CONSECUTIVE = 5;   // stop entirely if this many emails fail in a row
  const SUCCESS_TIMEOUT = 12000;       // ms to wait for the success message before counting a failure
  const ERROR_COOLDOWN = 10 * 60 * 1000;  // pause this long (ms) after any error before continuing
 
  // ===========================================================================
 
  const DONE_KEY = "contest_auto_done_v1";
 
  const rand = ([lo, hi]) => lo + Math.random() * (hi - lo);
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const step = () => sleep(rand(WAIT_BETWEEN_STEPS));
 
  function getDone() {
    try { return new Set(JSON.parse(localStorage.getItem(DONE_KEY) || "[]")); }
    catch { return new Set(); }
  }
  function markDone(email) {
    const d = getDone(); d.add(email);
    localStorage.setItem(DONE_KEY, JSON.stringify([...d]));
  }
  function nextEmail() {
    const done = getDone(), failed = getFailed();
    return EMAILS.find(e => !done.has(e) && !failed.has(e)) || null;
  }
 
  // Emails that exhausted their retries — skipped so a bad address never blocks the
  // rest, and skipped on restart too (clear the key to retry them; see final log).
  const FAILED_KEY = "contest_auto_failed_v1";
  function getFailed() {
    try { return new Set(JSON.parse(localStorage.getItem(FAILED_KEY) || "[]")); }
    catch { return new Set(); }
  }
  function markFailed(email) {
    const s = getFailed(); s.add(email);
    localStorage.setItem(FAILED_KEY, JSON.stringify([...s]));
  }
 
  // Per-email attempt counter that PERSISTS across page reloads, so even if a failure
  // reloads the page, an address can't be retried endlessly.
  const ATTEMPTS_KEY = "contest_auto_attempts_v1";
  function getAttempts() {
    try { return JSON.parse(localStorage.getItem(ATTEMPTS_KEY) || "{}"); }
    catch { return {}; }
  }
  function bumpAttempt(email) {
    const a = getAttempts(); a[email] = (a[email] || 0) + 1;
    localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(a));
    return a[email];
  }
 
  // Consecutive-failure streak (persists across reloads) to detect a real block.
  const STREAK_KEY = "contest_auto_streak_v1";
  const getStreak = () => parseInt(localStorage.getItem(STREAK_KEY) || "0", 10);
  const setStreak = n => localStorage.setItem(STREAK_KEY, String(n));
 
  // Reload to a clean form page so the next entry starts fresh (this is the
  // "refresh between signups" — it also discards the success/error overlay).
  function reloadForNext() {
    location.href = location.origin + FORM_PATH;
  }
 
  // Cooldown after an error: persist a "paused until" timestamp so the wait
  // survives page reloads, and honor it at the start of each run.
  const COOLDOWN_KEY = "contest_auto_cooldown_until_v1";
  function startCooldown() {
    localStorage.setItem(COOLDOWN_KEY, String(Date.now() + ERROR_COOLDOWN));
  }
  async function waitOutCooldown() {
    const until = parseInt(localStorage.getItem(COOLDOWN_KEY) || "0", 10);
    let remaining = until - Date.now();
    if (remaining <= 0) { localStorage.removeItem(COOLDOWN_KEY); return; }
    console.log(`[contest] Cooling down after an error — waiting ${Math.ceil(remaining / 60000)} min before continuing.`);
    // Sleep in chunks so a long wait still logs progress and stays responsive.
    while (remaining > 0) {
      await sleep(Math.min(remaining, 30000));
      remaining = parseInt(localStorage.getItem(COOLDOWN_KEY) || "0", 10) - Date.now();
    }
    localStorage.removeItem(COOLDOWN_KEY);
    console.log(`[contest] Cooldown over — resuming.`);
  }
 
  // "pending" = the email we've submitted but not yet seen confirmed (survives the
  // page navigation that a form submit causes).
  const PENDING_KEY = "contest_auto_pending_v1";
  const getPending = () => localStorage.getItem(PENDING_KEY) || null;
  const setPending = e => localStorage.setItem(PENDING_KEY, e);
  const clearPending = () => localStorage.removeItem(PENDING_KEY);
 
  function buttonByText(txt) {
    return [...document.querySelectorAll("button")]
      .find(b => b.textContent.trim() === txt) || null;
  }
 
  // Click an element the way a mouse does: full pointer + mouse event sequence,
  // not just a bare .click(). Some forms/checkboxes only respond to this.
  function realClick(el) {
    const r = el.getBoundingClientRect();
    const o = { bubbles: true, cancelable: true, view: window,
                clientX: r.left + r.width / 2, clientY: r.top + r.height / 2, button: 0 };
    el.dispatchEvent(new PointerEvent("pointerover", o));
    el.dispatchEvent(new PointerEvent("pointerenter", o));
    el.dispatchEvent(new MouseEvent("mouseover", o));
    el.dispatchEvent(new PointerEvent("pointerdown", o));
    el.dispatchEvent(new MouseEvent("mousedown", o));
    el.focus && el.focus();
    el.dispatchEvent(new PointerEvent("pointerup", o));
    el.dispatchEvent(new MouseEvent("mouseup", o));
    el.dispatchEvent(new MouseEvent("click", o));
  }
 
  // Set a value the way frameworks (React etc.) expect: native setter + input/change events.
  function setValue(el, value) {
    const proto = el.tagName === "TEXTAREA"
      ? window.HTMLTextAreaElement.prototype
      : window.HTMLInputElement.prototype;
    const setter = Object.getOwnPropertyDescriptor(proto, "value").set;
    setter.call(el, value);
    el.dispatchEvent(new Event("input", { bubbles: true }));
    el.dispatchEvent(new Event("change", { bubbles: true }));
  }
 
  // Type a value character by character, firing the same key + input events a real
  // person's typing does. Needed for forms whose validation ignores a pasted/set
  // value, and for fields that auto-format (like the dash-inserting DOB field).
  const nativeSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype, "value").set;
 
  function fireKey(el, type, ch) {
    el.dispatchEvent(new KeyboardEvent(type, { key: ch, bubbles: true, cancelable: true }));
  }
 
  async function typeInto(el, text) {
    el.focus();
    nativeSetter.call(el, "");                 // start from empty
    el.dispatchEvent(new Event("input", { bubbles: true }));
    for (const ch of text) {
      fireKey(el, "keydown", ch);
      fireKey(el, "keypress", ch);
      nativeSetter.call(el, el.value + ch);    // append one character
      el.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "insertText", data: ch }));
      fireKey(el, "keyup", ch);
      await sleep(rand(TYPE_DELAY));
    }
    el.dispatchEvent(new Event("change", { bubbles: true }));
    el.blur();
  }
 
  // The DOB field auto-inserts dashes, so we type the digits and let it format.
  async function fillDob(el) {
    await typeInto(el, DOB);
  }
 
  async function waitFor(selectorOrFn, timeout = 10000) {
    const start = Date.now();
    while (Date.now() - start < timeout) {
      const el = typeof selectorOrFn === "function"
        ? selectorOrFn() : document.querySelector(selectorOrFn);
      if (el && (el.offsetParent !== null || el.getClientRects().length)) return el;
      await sleep(200);
    }
    return null;
  }
 
  const successVisible = () =>
    !!SUCCESS_TEXT && !!document.body && document.body.innerText.includes(SUCCESS_TEXT);
  const onFormPage = () => !!buttonByText(OPEN_BUTTON_TEXT);
 
  // Click a point on the overlay backdrop that is OUTSIDE the dialog box, the way
  // clicking outside the modal by hand dismisses it.
  function clickOutsideDialog() {
    const overlay = document.querySelector(SEL_OVERLAY);
    if (!overlay) return false;
    const dialog = document.querySelector(SEL_DIALOG);
    // Pick a point inside the overlay but outside the dialog (just inside top-left corner).
    let x = 8, y = 8;
    if (dialog) {
      const d = dialog.getBoundingClientRect();
      // if the top-left corner isn't clear of the dialog, use a point to its left/above
      if (x >= d.left && x <= d.right && y >= d.top && y <= d.bottom) {
        x = Math.max(4, d.left - 10);
        y = Math.max(4, d.top - 10);
      }
    }
    const o = { bubbles: true, cancelable: true, view: window, clientX: x, clientY: y, button: 0 };
    const target = document.elementFromPoint(x, y) || overlay;
    target.dispatchEvent(new PointerEvent("pointerdown", o));
    target.dispatchEvent(new MouseEvent("mousedown", o));
    target.dispatchEvent(new PointerEvent("pointerup", o));
    target.dispatchEvent(new MouseEvent("mouseup", o));
    target.dispatchEvent(new MouseEvent("click", o));
    return true;
  }
 
  // Dismiss the success overlay so the form is usable again for the next entry.
  async function closeSuccess() {
    // Preferred: click outside the dialog (ReactModal backdrop dismiss).
    clickOutsideDialog();
    let ready = await waitFor(
      () => (!successVisible() && onFormPage()) ? document.body : null, 4000);
 
    // Fallback 1: the X button by selector.
    if (!ready && SEL_CLOSE) {
      const x = document.querySelector(SEL_CLOSE);
      if (x) realClick(x);
      ready = await waitFor(
        () => (!successVisible() && onFormPage()) ? document.body : null, 4000);
    }
    // Fallback 2: the Escape key (ReactModal closes on Escape by default).
    if (!ready) {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", keyCode: 27, bubbles: true }));
      ready = await waitFor(
        () => (!successVisible() && onFormPage()) ? document.body : null, 4000);
    }
    if (!ready) throw new Error("could not close the success overlay");
  }
 
  async function doEntry(email) {
    // Open the pop-up form.
    const openBtn = buttonByText(OPEN_BUTTON_TEXT);
    if (!openBtn) throw new Error("open button not found");
    realClick(openBtn);
 
    const emailEl = await waitFor(SEL_EMAIL);
    if (!emailEl) throw new Error("email field never appeared");
    await step();
 
    await typeInto(emailEl, email);   // type it out, key by key
    await step();
 
    const dobEl = document.querySelector(SEL_DOB);
    if (dobEl) {
      await fillDob(dobEl);
      await step();
    } else {
      throw new Error(`DOB field not found — check SEL_DOB ("${SEL_DOB}")`);
    }
 
    const optin = document.querySelector(SEL_OPTIN);
    if (optin) {
      if (!optin.checked) {
        realClick(optin);
        if (!optin.checked) { optin.checked = true; optin.dispatchEvent(new Event("change", { bubbles: true })); }
      }
      await step();
    } else {
      throw new Error(`opt-in checkbox not found — check SEL_OPTIN ("${SEL_OPTIN}")`);
    }
 
    const submitBtn = buttonByText(SUBMIT_BUTTON_TEXT);
    if (!submitBtn) throw new Error("submit button not found");
    realClick(submitBtn);
    // Submitting may navigate the page. Confirmation is handled on the next load
    // (or just below, if the submit was AJAX and didn't navigate).
  }
 
  async function main() {
    // One entry per page load, then refresh for the next. Progress, attempt counts,
    // and the failure streak all persist in localStorage across the reloads.
    if (!onFormPage()) return;   // not the form page (e.g. an error page) — do nothing
 
    const email = nextEmail();
    if (!email) {
      const done = getDone().size, failed = getFailed().size;
      console.log(`[contest] All done. ${done} succeeded, ${failed} skipped after retries.`);
      if (failed) {
        console.log(`[contest] To retry the ${failed} skipped, run this then reload:`);
        console.log(`  localStorage.removeItem('${FAILED_KEY}'); localStorage.removeItem('${ATTEMPTS_KEY}')`);
      }
      return;   // finished — stop reloading
    }
 
    // If a previous error started a cooldown, wait it out before continuing.
    await waitOutCooldown();
 
    const maxAttempts = MAX_RETRIES + 1;
    const attempt = bumpAttempt(email);          // survives reloads
    const remaining = EMAILS.length - getDone().size - getFailed().size;
    console.log(`[contest] Entering ${email} (attempt ${attempt}/${maxAttempts}, ${remaining} left)`);
 
    await sleep(rand(WAIT_BEFORE_START));
 
    try {
      await doEntry(email);
      if (SUCCESS_TEXT) {
        const ok = await waitFor(() => successVisible() ? document.body : null, SUCCESS_TIMEOUT);
        if (!ok) throw new Error("no success confirmation after submit");
      }
      markDone(email);
      setStreak(0);
      console.log(`[contest] OK: ${email}`);
    } catch (e) {
      console.warn(`[contest] attempt ${attempt}/${maxAttempts} failed for ${email}: ${e.message}`);
      startCooldown();   // pause before the next attempt / next email
      if (attempt >= maxAttempts) {
        markFailed(email);
        const streak = getStreak() + 1;
        setStreak(streak);
        console.warn(`[contest] SKIPPED ${email} after ${maxAttempts} attempts.`);
        if (streak >= ABORT_AFTER_CONSECUTIVE) {
          console.error(`[contest] STOPPING: ${streak} emails failed in a row — likely a real block or a broken form. Nothing will be lost; fix the issue and reload to resume.`);
          localStorage.removeItem(COOLDOWN_KEY);   // no point holding a cooldown while halted
          return;   // do NOT reload — halt for review
        }
      }
      // else: will retry this same email on the next load
    }
 
    // Refresh for the next entry (or the retry).
    await sleep(rand(WAIT_AFTER_SUBMIT));
    reloadForNext();
  }
 
  // Run once the DOM is ready (also safe if injected very early).
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", main);
  } else {
    main();
  }
})();
