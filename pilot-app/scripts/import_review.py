import json
from pathlib import Path
from openpyxl import load_workbook

root=Path(__file__).resolve().parents[2]
book=root/'outputs/pilot-tracking-plan/seller-landing-page-review-import_pilot.xlsx'
out=Path(__file__).resolve().parents[1]/'src/pilotData.json'
w=load_workbook(book,data_only=True)
def records(name):
    rows=list(w[name].values)
    headers=[str(x) for x in rows[0]]
    return [dict(zip(headers,[x if x is not None else '' for x in row])) for row in rows[1:] if any(x is not None for x in row)]
plan_rows=records('Plan')
plan={r['Field']:r['Reviewed document entry'] for r in plan_rows}
if plan.get('Source document'):
    plan['Source document']=Path(plan['Source document']).name
if 'Status' not in plan:
    version_row=next((r for r in plan_rows if r['Field']=='Plan ID and version'),{})
    plan['Status']=version_row.get('Review note','').strip() or 'In Review'
data={
 'sourceWorkbook':book.name,
 'plan':plan,
 'events':records('Events'),
 'properties':records('Properties'),
 'eventProperties':records('Event Properties'),
 'placements':records('Placements'),
 'validation':records('Validation'),
 'openQuestions':records('Open Questions'),
}
out.write_text(json.dumps(data,indent=2,ensure_ascii=False))
print(out)
