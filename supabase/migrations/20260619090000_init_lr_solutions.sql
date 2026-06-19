create extension if not exists pgcrypto;

create table if not exists public.site_content (
  id text primary key default 'main',
  content jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null default '',
  position int not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.pricing (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  price text not null,
  description text not null default '',
  features jsonb not null default '[]'::jsonb,
  position int not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  published_at date not null default current_date,
  excerpt text not null default '',
  slug text unique,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  nom text,
  prenom text,
  societe text,
  telephone text,
  email text not null,
  message text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  nom text,
  prenom text,
  societe text,
  telephone text,
  email text not null,
  besoin text,
  message text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_site_content_updated_at on public.site_content;
create trigger set_site_content_updated_at
before update on public.site_content
for each row execute function public.set_updated_at();

drop trigger if exists set_services_updated_at on public.services;
create trigger set_services_updated_at
before update on public.services
for each row execute function public.set_updated_at();

drop trigger if exists set_pricing_updated_at on public.pricing;
create trigger set_pricing_updated_at
before update on public.pricing
for each row execute function public.set_updated_at();

drop trigger if exists set_blog_posts_updated_at on public.blog_posts;
create trigger set_blog_posts_updated_at
before update on public.blog_posts
for each row execute function public.set_updated_at();

alter table public.site_content enable row level security;
alter table public.services enable row level security;
alter table public.pricing enable row level security;
alter table public.blog_posts enable row level security;
alter table public.contacts enable row level security;
alter table public.quote_requests enable row level security;

drop policy if exists "Public can read active services" on public.services;
create policy "Public can read active services" on public.services
for select using (active = true);

drop policy if exists "Public can read active pricing" on public.pricing;
create policy "Public can read active pricing" on public.pricing
for select using (active = true);

drop policy if exists "Public can read active blog posts" on public.blog_posts;
create policy "Public can read active blog posts" on public.blog_posts
for select using (active = true);

drop policy if exists "Public can read main site content" on public.site_content;
create policy "Public can read main site content" on public.site_content
for select using (id = 'main');

insert into public.site_content (id, content)
values (
  'main',
  '{
    "heroTitle": "L&R SOLUTIONS structure et accélère votre croissance.",
    "heroText": "Cabinet de conseil nouvelle génération, L&R SOLUTIONS accompagne les entreprises, indépendants, associations et dirigeants dans leur développement commercial, leur présence digitale et leur transformation numérique.",
    "slogan": "Solutions intelligentes, résultats durables.",
    "services": [
      {"title":"Conseil et accompagnement","text":"Clarifier votre stratégie, cadrer vos priorités et avancer avec un plan d''action concret."},
      {"title":"Développement commercial","text":"Structurer votre offre, vos canaux d''acquisition, votre prospection et votre suivi client."},
      {"title":"Marketing et communication","text":"Renforcer votre positionnement, votre image de marque et votre visibilité auprès des bons publics."},
      {"title":"Création de sites internet","text":"Concevoir des sites vitrines modernes, rapides, responsives et pensés pour convertir."},
      {"title":"Développement d''applications web","text":"Créer des outils métiers, tableaux de bord et interfaces sur mesure pour vos opérations."},
      {"title":"Automatisation de processus","text":"Réduire les tâches répétitives grâce à des workflows simples, fiables et mesurables."},
      {"title":"Solutions numériques","text":"Choisir, intégrer et optimiser les bons outils pour piloter votre activité au quotidien."},
      {"title":"Digitalisation des entreprises","text":"Moderniser vos méthodes de travail, vos documents, votre organisation et votre suivi."},
      {"title":"Formations","text":"Former les dirigeants et équipes aux outils numériques, au marketing, à l''IA et à l''automatisation."},
      {"title":"Evénementiel professionnel","text":"Structurer, organiser et valoriser vos événements professionnels, rencontres et lancements."},
      {"title":"Mise en relation et partenariats","text":"Identifier des opportunités qualifiées et créer des connexions utiles à votre développement."}
    ],
    "pricing": [
      {"name":"Diagnostic Start","price":"290 €","description":"Un cadrage rapide pour identifier les priorités et repartir avec une feuille de route claire.","features":["Audit express","Entretien stratégique","Plan d''action priorisé"]},
      {"name":"Pack Business","price":"690 €","description":"Un accompagnement pour structurer votre développement commercial et gagner en efficacité.","features":["Positionnement","Plan commercial","Supports de prospection"]},
      {"name":"Pack Digital","price":"990 €","description":"Une base digitale solide pour présenter votre activité, rassurer et générer des contacts.","features":["Stratégie digitale","Site ou parcours web","Optimisation conversion"]},
      {"name":"Pack Automatisation","price":"1 490 €","description":"Des automatisations concrètes pour gagner du temps et fiabiliser les processus.","features":["Audit processus","Workflows automatisés","Formation prise en main"]},
      {"name":"Accompagnement 360","price":"Sur devis","description":"Une mission complète pour transformer votre organisation, votre acquisition et vos outils.","features":["Audit global","Roadmap complète","Suivi dirigeant"]}
    ],
    "blog": [
      {"title":"Structurer sa croissance avant d''accélérer","date":"2026-06-18","excerpt":"Pourquoi une stratégie claire, des outils simples et un suivi régulier changent la trajectoire d''une entreprise."},
      {"title":"Créer un site internet qui génère vraiment des demandes","date":"2026-06-18","excerpt":"Les fondamentaux d''un site vitrine professionnel : message, confiance, preuves, appels à l''action et vitesse."},
      {"title":"Automatisation : par où commencer sans complexifier l''entreprise ?","date":"2026-06-18","excerpt":"Identifier les tâches répétitives, prioriser les gains rapides et déployer des automatisations utiles."}
    ]
  }'::jsonb
)
on conflict (id) do nothing;

insert into public.services (title, description, position)
select item->>'title', item->>'text', ordinality::int
from public.site_content,
jsonb_array_elements(content->'services') with ordinality as service(item, ordinality)
where id = 'main'
on conflict do nothing;

insert into public.pricing (name, price, description, features, position)
select item->>'name', item->>'price', item->>'description', coalesce(item->'features', '[]'::jsonb), ordinality::int
from public.site_content,
jsonb_array_elements(content->'pricing') with ordinality as pack(item, ordinality)
where id = 'main'
on conflict do nothing;

insert into public.blog_posts (title, published_at, excerpt, slug)
select
  item->>'title',
  coalesce((item->>'date')::date, current_date),
  item->>'excerpt',
  lower(regexp_replace(regexp_replace(item->>'title', '[^a-zA-Z0-9]+', '-', 'g'), '(^-|-$)', '', 'g'))
from public.site_content,
jsonb_array_elements(content->'blog') as post(item)
where id = 'main'
on conflict (slug) do nothing;
