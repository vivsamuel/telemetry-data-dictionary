export type EventRecord = { name: string; description: string; area: string; type: string; status: string; owner: string; date: string; code: string }
export const eventRecords: EventRecord[] = [
  { name: 'create_listing_click', description: 'User clicks on the “Create Listing” button to start a new listing.', area: 'Create Listings', type: 'Click', status: 'Validated', owner: 'Listing Platform', date: 'Sep 29, 2026', code: 'LP' },
  { name: 'create_listing_view', description: 'Page view when user lands on the Create Listing page.', area: 'Create Listings', type: 'Page Impression', status: 'Validated', owner: 'Listing Platform', date: 'Sep 28, 2026', code: 'LP' },
  { name: 'listing_publish_success', description: 'Listing is successfully published (after direct publish or draft publish).', area: 'Create Listings', type: 'Success (Outcome)', status: 'Implemented', owner: 'Listing Platform', date: 'Sep 28, 2026', code: 'LP' },
  { name: 'draft_save_click', description: 'User clicks “Save as Draft” while creating a listing.', area: 'Create Listings', type: 'Click', status: 'Validated', owner: 'Listing Platform', date: 'Sep 26, 2026', code: 'LP' },
  { name: 'draft_update', description: 'User updates a previously saved draft (e.g., edits and saves again).', area: 'Create Listings', type: 'Page Impression', status: 'Implemented', owner: 'Listing Platform', date: 'Sep 25, 2026', code: 'LP' },
  { name: 'express_listing_view', description: 'Page view of the Express Listings entry page.', area: 'Express Listings', type: 'Page Impression', status: 'Validated', owner: 'Express Listings', date: 'Sep 24, 2026', code: 'EL' },
  { name: 'buy_it_now_click', description: 'User clicks “Buy it now” on the client item page.', area: 'Client Experience', type: 'Click', status: 'Validated', owner: 'Client Experience', date: 'Sep 23, 2026', code: 'CX' },
  { name: 'sold_out_view', description: 'Page view of the post-purchase page with a greyed-out “Sold out” CTA.', area: 'Client Experience', type: 'Page Impression', status: 'Implemented', owner: 'Client Experience', date: 'Sep 23, 2026', code: 'CX' },
]
export type PropertyRecord = { name: string; definition: string; type: string; values: string; required: boolean; owner: string; status: string }
export const propertyRecords: PropertyRecord[] = [
  { name:'onboardingflow', definition:'Identifies the user flow or onboarding journey.', type:'String', values:'CREATE_LISTINGS, EXPRESS_LISTINGS, LIVE, GROUPING_MGMT', required:true, owner:'Listings (Prod Analytics)', status:'Active' },
  { name:'page_id', definition:'Unique identifier for the page or screen (cp in event tracer).', type:'Integer', values:'e.g., 4680863, 4680991', required:true, owner:'Telemetry Platform', status:'Active' },
  { name:'listing_id', definition:'Unique identifier for a listing (draft or published).', type:'String', values:'e.g., 123456789012', required:false, owner:'Listings (Platform)', status:'Active' },
  { name:'seller_type', definition:'Type of seller on eBay.', type:'String', values:'INDIVIDUAL, BUSINESS, ENTERPRISE', required:false, owner:'Seller Experience', status:'Active' },
  { name:'experiment_variant', definition:'Variant a user is assigned to in an experiment.', type:'String', values:'CONTROL, TREATMENT_A, TREATMENT_B', required:false, owner:'Experimentation Analytics', status:'Active' },
  { name:'sid', definition:'Session identifier for the user session.', type:'String', values:'e.g., 8f3a2d9e...', required:true, owner:'Telemetry Platform', status:'Active' },
  { name:'error_id', definition:'Standardized identifier for an error or info message.', type:'String', values:'e.g., E1001 (invalid input), E2003 (coupon required)', required:false, owner:'UX Instrumentation', status:'Active' },
  { name:'experiment_id', definition:'Unique identifier for an experiment.', type:'String', values:'e.g., exp_4687', required:false, owner:'Experimentation Analytics', status:'Deprecated' },
]
export type PlanRecord = { name: string; area: string; events: number; owner: string; version: string; date: string; status: string }
export const planRecords: PlanRecord[] = [
  { name:'Create Listing Flow', area:'Listings', events:18, owner:'VS', version:'v2.3', date:'Sep 29, 2026', status:'In Review' },
  { name:'Seller Onboarding', area:'Seller Growth', events:12, owner:'AN', version:'v1.4', date:'Sep 26, 2026', status:'Approved' },
  { name:'Listing Publishing', area:'Listings', events:14, owner:'RM', version:'v3.0', date:'Sep 24, 2026', status:'Draft' },
  { name:'Express Listings', area:'Listings', events:9, owner:'KL', version:'v1.2', date:'Sep 20, 2026', status:'Approved' },
  { name:'Draft Management', area:'Listings', events:8, owner:'VS', version:'v1.1', date:'Sep 18, 2026', status:'In Review' },
  { name:'Grouping Management', area:'Inventory', events:6, owner:'DP', version:'v1.0', date:'Sep 16, 2026', status:'Draft' },
  { name:'Opening Up', area:'Seller Tools', events:9, owner:'AN', version:'v1.3', date:'Sep 12, 2026', status:'Approved' },
  { name:'Flash Deal Purchase', area:'Deals', events:11, owner:'RM', version:'v2.0', date:'Sep 10, 2026', status:'Deprecated' },
]
