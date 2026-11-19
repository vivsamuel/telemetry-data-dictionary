import type { ReactNode } from 'react'

type Props = { page: string; navigate: (path: string) => void; children: ReactNode }
const items = [['⌂', 'Overview', '/'], ['▱', 'Events', '/events'], ['◇', 'Properties', '/properties'], ['▣', 'Tracking plans', '/tracking-plans']]
export function CatalogShell({ page, navigate, children }: Props) {
  return <div className="catalog-app"><header className="catalog-top"><div className="catalog-brand"><span className="ebay"><i>e</i><i>b</i><i>a</i><i>y</i></span><span className="brand-divider"/>Product Analytics<span className="brand-divider"/>Data Dictionary</div><div className="catalog-actions"><button aria-label="Help">ⓘ</button><button aria-label="Notifications">♧<b className="dot"/></button><button className="catalog-avatar">VS</button><span>⌄</span></div></header><aside className="catalog-sidebar"><nav>{items.map(([icon, label, href]) => <button key={href} className={page === href ? 'selected' : ''} onClick={() => navigate(href)}><span>{icon}</span>{label}</button>)}</nav><div className="sidebar-wave"/></aside><div className="catalog-content">{children}</div></div>
}
