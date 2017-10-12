--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.5
-- Dumped by pg_dump version 9.6.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: assignments; Type: TABLE; Schema: public; Owner: olivetree
--

CREATE TABLE assignments (
    id integer NOT NULL,
    title character varying(255),
    description character varying(255),
    location_url character varying(255),
    submit_url character varying(255),
    unit_id integer,
    mastery_id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE assignments OWNER TO olivetree;

--
-- Name: assignments_id_seq; Type: SEQUENCE; Schema: public; Owner: olivetree
--

CREATE SEQUENCE assignments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE assignments_id_seq OWNER TO olivetree;

--
-- Name: assignments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: olivetree
--

ALTER SEQUENCE assignments_id_seq OWNED BY assignments.id;


--
-- Name: cohorts; Type: TABLE; Schema: public; Owner: olivetree
--

CREATE TABLE cohorts (
    id integer NOT NULL,
    title character varying(255) DEFAULT ''::character varying NOT NULL,
    start_date timestamp with time zone DEFAULT now() NOT NULL,
    end_date timestamp with time zone DEFAULT now() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE cohorts OWNER TO olivetree;

--
-- Name: cohorts_id_seq; Type: SEQUENCE; Schema: public; Owner: olivetree
--

CREATE SEQUENCE cohorts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE cohorts_id_seq OWNER TO olivetree;

--
-- Name: cohorts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: olivetree
--

ALTER SEQUENCE cohorts_id_seq OWNED BY cohorts.id;


--
-- Name: cohorts_users; Type: TABLE; Schema: public; Owner: olivetree
--

CREATE TABLE cohorts_users (
    id integer NOT NULL,
    user_id integer NOT NULL,
    cohort_id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE cohorts_users OWNER TO olivetree;

--
-- Name: cohorts_users_id_seq; Type: SEQUENCE; Schema: public; Owner: olivetree
--

CREATE SEQUENCE cohorts_users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE cohorts_users_id_seq OWNER TO olivetree;

--
-- Name: cohorts_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: olivetree
--

ALTER SEQUENCE cohorts_users_id_seq OWNED BY cohorts_users.id;


--
-- Name: dailyplans; Type: TABLE; Schema: public; Owner: olivetree
--

CREATE TABLE dailyplans (
    id integer NOT NULL,
    date date DEFAULT now() NOT NULL,
    users_id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE dailyplans OWNER TO olivetree;

--
-- Name: dailyplans_events; Type: TABLE; Schema: public; Owner: olivetree
--

CREATE TABLE dailyplans_events (
    id integer NOT NULL,
    dailyplan_id integer NOT NULL,
    event_time time without time zone DEFAULT now() NOT NULL,
    plan character varying(255),
    lesson_id integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE dailyplans_events OWNER TO olivetree;

--
-- Name: dailyplans_events_id_seq; Type: SEQUENCE; Schema: public; Owner: olivetree
--

CREATE SEQUENCE dailyplans_events_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dailyplans_events_id_seq OWNER TO olivetree;

--
-- Name: dailyplans_events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: olivetree
--

ALTER SEQUENCE dailyplans_events_id_seq OWNED BY dailyplans_events.id;


--
-- Name: dailyplans_id_seq; Type: SEQUENCE; Schema: public; Owner: olivetree
--

CREATE SEQUENCE dailyplans_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dailyplans_id_seq OWNER TO olivetree;

--
-- Name: dailyplans_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: olivetree
--

ALTER SEQUENCE dailyplans_id_seq OWNED BY dailyplans.id;


--
-- Name: helps; Type: TABLE; Schema: public; Owner: olivetree
--

CREATE TABLE helps (
    id integer NOT NULL,
    user_id integer NOT NULL,
    assignment_id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE helps OWNER TO olivetree;

--
-- Name: helps_id_seq; Type: SEQUENCE; Schema: public; Owner: olivetree
--

CREATE SEQUENCE helps_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE helps_id_seq OWNER TO olivetree;

--
-- Name: helps_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: olivetree
--

ALTER SEQUENCE helps_id_seq OWNED BY helps.id;


--
-- Name: knex_migrations; Type: TABLE; Schema: public; Owner: olivetree
--

CREATE TABLE knex_migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);


ALTER TABLE knex_migrations OWNER TO olivetree;

--
-- Name: knex_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: olivetree
--

CREATE SEQUENCE knex_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE knex_migrations_id_seq OWNER TO olivetree;

--
-- Name: knex_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: olivetree
--

ALTER SEQUENCE knex_migrations_id_seq OWNED BY knex_migrations.id;


--
-- Name: knex_migrations_lock; Type: TABLE; Schema: public; Owner: olivetree
--

CREATE TABLE knex_migrations_lock (
    is_locked integer
);


ALTER TABLE knex_migrations_lock OWNER TO olivetree;

--
-- Name: lessons; Type: TABLE; Schema: public; Owner: olivetree
--

CREATE TABLE lessons (
    id integer NOT NULL,
    title character varying(255),
    location_url character varying(255),
    dailyplan_id integer NOT NULL,
    unit_id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE lessons OWNER TO olivetree;

--
-- Name: lessons_id_seq; Type: SEQUENCE; Schema: public; Owner: olivetree
--

CREATE SEQUENCE lessons_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE lessons_id_seq OWNER TO olivetree;

--
-- Name: lessons_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: olivetree
--

ALTER SEQUENCE lessons_id_seq OWNED BY lessons.id;


--
-- Name: mastery_track; Type: TABLE; Schema: public; Owner: olivetree
--

CREATE TABLE mastery_track (
    id integer NOT NULL,
    title character varying(255),
    description character varying(255),
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE mastery_track OWNER TO olivetree;

--
-- Name: mastery_track_id_seq; Type: SEQUENCE; Schema: public; Owner: olivetree
--

CREATE SEQUENCE mastery_track_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE mastery_track_id_seq OWNER TO olivetree;

--
-- Name: mastery_track_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: olivetree
--

ALTER SEQUENCE mastery_track_id_seq OWNED BY mastery_track.id;


--
-- Name: units; Type: TABLE; Schema: public; Owner: olivetree
--

CREATE TABLE units (
    id integer NOT NULL,
    title character varying(255),
    description character varying(255),
    location_url character varying(255),
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE units OWNER TO olivetree;

--
-- Name: units_id_seq; Type: SEQUENCE; Schema: public; Owner: olivetree
--

CREATE SEQUENCE units_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE units_id_seq OWNER TO olivetree;

--
-- Name: units_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: olivetree
--

ALTER SEQUENCE units_id_seq OWNED BY units.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: olivetree
--

CREATE TABLE users (
    id integer NOT NULL,
    first_name character varying(255) DEFAULT ''::character varying NOT NULL,
    middle_initial character varying(1) DEFAULT ''::character varying,
    last_name character varying(255) DEFAULT ''::character varying NOT NULL,
    email character varying(255) NOT NULL,
    hashed_password character(60) NOT NULL,
    is_instructor boolean DEFAULT false NOT NULL,
    is_enabled boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE users OWNER TO olivetree;

--
-- Name: users_assignments; Type: TABLE; Schema: public; Owner: olivetree
--

CREATE TABLE users_assignments (
    id integer NOT NULL,
    user_id integer NOT NULL,
    assignment_id integer NOT NULL,
    grade integer,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE users_assignments OWNER TO olivetree;

--
-- Name: users_assignments_id_seq; Type: SEQUENCE; Schema: public; Owner: olivetree
--

CREATE SEQUENCE users_assignments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_assignments_id_seq OWNER TO olivetree;

--
-- Name: users_assignments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: olivetree
--

ALTER SEQUENCE users_assignments_id_seq OWNED BY users_assignments.id;


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: olivetree
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_id_seq OWNER TO olivetree;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: olivetree
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: assignments id; Type: DEFAULT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY assignments ALTER COLUMN id SET DEFAULT nextval('assignments_id_seq'::regclass);


--
-- Name: cohorts id; Type: DEFAULT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY cohorts ALTER COLUMN id SET DEFAULT nextval('cohorts_id_seq'::regclass);


--
-- Name: cohorts_users id; Type: DEFAULT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY cohorts_users ALTER COLUMN id SET DEFAULT nextval('cohorts_users_id_seq'::regclass);


--
-- Name: dailyplans id; Type: DEFAULT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY dailyplans ALTER COLUMN id SET DEFAULT nextval('dailyplans_id_seq'::regclass);


--
-- Name: dailyplans_events id; Type: DEFAULT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY dailyplans_events ALTER COLUMN id SET DEFAULT nextval('dailyplans_events_id_seq'::regclass);


--
-- Name: helps id; Type: DEFAULT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY helps ALTER COLUMN id SET DEFAULT nextval('helps_id_seq'::regclass);


--
-- Name: knex_migrations id; Type: DEFAULT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY knex_migrations ALTER COLUMN id SET DEFAULT nextval('knex_migrations_id_seq'::regclass);


--
-- Name: lessons id; Type: DEFAULT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY lessons ALTER COLUMN id SET DEFAULT nextval('lessons_id_seq'::regclass);


--
-- Name: mastery_track id; Type: DEFAULT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY mastery_track ALTER COLUMN id SET DEFAULT nextval('mastery_track_id_seq'::regclass);


--
-- Name: units id; Type: DEFAULT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY units ALTER COLUMN id SET DEFAULT nextval('units_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Name: users_assignments id; Type: DEFAULT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY users_assignments ALTER COLUMN id SET DEFAULT nextval('users_assignments_id_seq'::regclass);


--
-- Data for Name: assignments; Type: TABLE DATA; Schema: public; Owner: olivetree
--

COPY assignments (id, title, description, location_url, submit_url, unit_id, mastery_id, created_at, updated_at) FROM stdin;
1	CLI Assessment	none	www.assignment.com	www.submit.com	1	1	2017-10-11 17:35:05.966377-06	2017-10-11 17:35:05.966377-06
2	Reading Javascript Expressions	none	www.assignment.com	www.submit.com	2	1	2017-10-11 17:35:05.966377-06	2017-10-11 17:35:05.966377-06
3	Writing Javascript Expressions	none	www.assignment.com	www.submit.com	3	1	2017-10-11 17:35:05.966377-06	2017-10-11 17:35:05.966377-06
4	Semantic HTML	none	www.assignment.com	www.submit.com	4	1	2017-10-11 17:35:05.966377-06	2017-10-11 17:35:05.966377-06
5	CSS Checkpoint	none	www.assignment.com	www.submit.com	5	1	2017-10-11 17:35:05.966377-06	2017-10-11 17:35:05.966377-06
6	Project Pixel Art	none	www.assignment.com	www.submit.com	6	1	2017-10-11 17:35:05.966377-06	2017-10-11 17:35:05.966377-06
7	Galvanize Delivers	none	www.assignment.com	www.submit.com	7	1	2017-10-11 17:35:05.966377-06	2017-10-11 17:35:05.966377-06
8	Vim Checkpoint	none	www.assignment.com	www.submit.com	8	1	2017-10-11 17:35:05.966377-06	2017-10-11 17:35:05.966377-06
9	Accumulator	none	www.assignment.com	www.submit.com	9	1	2017-10-11 17:35:05.966377-06	2017-10-11 17:35:05.966377-06
10	LoDash	none	www.assignment.com	www.submit.com	10	1	2017-10-11 17:35:05.966377-06	2017-10-11 17:35:05.966377-06
11	AJAX Hero	none	www.assignment.com	www.submit.com	11	1	2017-10-11 17:35:05.966377-06	2017-10-11 17:35:05.966377-06
12	Q1 Project Demo	none	www.assignment.com	www.submit.com	12	1	2017-10-11 17:35:05.966377-06	2017-10-11 17:35:05.966377-06
13	Pet Shop	none	www.assignment.com	www.submit.com	13	1	2017-10-11 17:35:05.966377-06	2017-10-11 17:35:05.966377-06
14	Galvanize Contacts	none	www.assignment.com	www.submit.com	14	1	2017-10-11 17:35:05.966377-06	2017-10-11 17:35:05.966377-06
15	Galvanize Food Truck	none	www.assignment.com	www.submit.com	15	1	2017-10-11 17:35:05.966377-06	2017-10-11 17:35:05.966377-06
16	Galvanize Pet Grooming	none	www.assignment.com	www.submit.com	16	1	2017-10-11 17:35:05.966377-06	2017-10-11 17:35:05.966377-06
17	Galvanize Bookshelf	none	www.assignment.com	www.submit.com	17	1	2017-10-11 17:35:05.966377-06	2017-10-11 17:35:05.966377-06
18	Server Side Testing	none	www.assignment.com	www.submit.com	18	1	2017-10-11 17:35:05.966377-06	2017-10-11 17:35:05.966377-06
19	Q2 Project Demo	none	www.assignment.com	www.submit.com	19	1	2017-10-11 17:35:05.966377-06	2017-10-11 17:35:05.966377-06
\.


--
-- Name: assignments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: olivetree
--

SELECT pg_catalog.setval('assignments_id_seq', 1, false);


--
-- Data for Name: cohorts; Type: TABLE DATA; Schema: public; Owner: olivetree
--

COPY cohorts (id, title, start_date, end_date, created_at, updated_at) FROM stdin;
1	g36	2016-10-03 06:00:00-06	2017-03-09 13:00:00-07	2017-10-09 09:00:00-06	2017-10-09 09:00:00-06
2	g44	2017-02-01 05:00:00-07	2017-07-28 14:00:00-06	2017-10-09 09:00:00-06	2017-10-09 09:00:00-06
3	g49	2017-04-01 06:00:00-06	2017-09-28 14:00:00-06	2017-10-09 09:00:00-06	2017-10-09 09:00:00-06
4	g62	2017-07-31 06:00:00-06	2018-01-18 13:00:00-07	2017-10-09 09:00:00-06	2017-10-09 09:00:00-06
5	g68	2017-10-02 06:00:00-06	2018-03-20 14:00:00-06	2017-10-09 09:00:00-06	2017-10-09 09:00:00-06
\.


--
-- Name: cohorts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: olivetree
--

SELECT pg_catalog.setval('cohorts_id_seq', 5, true);


--
-- Data for Name: cohorts_users; Type: TABLE DATA; Schema: public; Owner: olivetree
--

COPY cohorts_users (id, user_id, cohort_id, created_at, updated_at) FROM stdin;
\.


--
-- Name: cohorts_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: olivetree
--

SELECT pg_catalog.setval('cohorts_users_id_seq', 1, false);


--
-- Data for Name: dailyplans; Type: TABLE DATA; Schema: public; Owner: olivetree
--

COPY dailyplans (id, date, users_id, created_at, updated_at) FROM stdin;
1	2017-09-18	1	2017-10-11 17:35:05.948873-06	2017-10-11 17:35:05.948873-06
2	2017-09-19	2	2017-10-11 17:35:05.948873-06	2017-10-11 17:35:05.948873-06
3	2017-09-20	3	2017-10-11 17:35:05.948873-06	2017-10-11 17:35:05.948873-06
4	2017-09-21	2	2017-10-11 17:35:05.948873-06	2017-10-11 17:35:05.948873-06
5	2017-09-22	1	2017-10-11 17:35:05.948873-06	2017-10-11 17:35:05.948873-06
6	2017-09-25	2	2017-10-11 17:35:05.948873-06	2017-10-11 17:35:05.948873-06
7	2017-09-26	3	2017-10-11 17:35:05.948873-06	2017-10-11 17:35:05.948873-06
8	2017-09-27	2	2017-10-11 17:35:05.948873-06	2017-10-11 17:35:05.948873-06
9	2017-09-28	1	2017-10-11 17:35:05.948873-06	2017-10-11 17:35:05.948873-06
10	2017-09-29	3	2017-10-11 17:35:05.948873-06	2017-10-11 17:35:05.948873-06
11	2017-10-02	1	2017-10-11 17:35:05.948873-06	2017-10-11 17:35:05.948873-06
12	2017-10-03	2	2017-10-11 17:35:05.948873-06	2017-10-11 17:35:05.948873-06
13	2017-10-04	3	2017-10-11 17:35:05.948873-06	2017-10-11 17:35:05.948873-06
14	2017-10-05	2	2017-10-11 17:35:05.948873-06	2017-10-11 17:35:05.948873-06
15	2017-10-06	1	2017-10-11 17:35:05.948873-06	2017-10-11 17:35:05.948873-06
\.


--
-- Data for Name: dailyplans_events; Type: TABLE DATA; Schema: public; Owner: olivetree
--

COPY dailyplans_events (id, dailyplan_id, event_time, plan, lesson_id, created_at, updated_at) FROM stdin;
1	11	09:00:00	Stand Up & Challenge Warm Up	0	2017-10-11 17:35:05.954446-06	2017-10-11 17:35:05.954446-06
2	11	10:00:00	Lesson 1 : Promises	0	2017-10-11 17:35:05.954446-06	2017-10-11 17:35:05.954446-06
3	11	12:00:00	Lunch	0	2017-10-11 17:35:05.954446-06	2017-10-11 17:35:05.954446-06
4	11	16:40:00	Stand Down	0	2017-10-11 17:35:05.954446-06	2017-10-11 17:35:05.954446-06
\.


--
-- Name: dailyplans_events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: olivetree
--

SELECT pg_catalog.setval('dailyplans_events_id_seq', 1, false);


--
-- Name: dailyplans_id_seq; Type: SEQUENCE SET; Schema: public; Owner: olivetree
--

SELECT pg_catalog.setval('dailyplans_id_seq', 1, false);


--
-- Data for Name: helps; Type: TABLE DATA; Schema: public; Owner: olivetree
--

COPY helps (id, user_id, assignment_id, created_at, updated_at) FROM stdin;
8	5	19	2017-10-12 09:59:01.614086-06	2017-10-12 09:59:01.614086-06
9	5	2	2017-10-12 10:00:41.720943-06	2017-10-12 10:00:41.720943-06
10	5	4	2017-10-12 10:03:07.333449-06	2017-10-12 10:03:07.333449-06
11	5	1	2017-10-12 10:11:05.748802-06	2017-10-12 10:11:05.748802-06
12	4	19	2017-10-12 10:11:52.800411-06	2017-10-12 10:11:52.800411-06
13	4	2	2017-10-12 10:11:59.272163-06	2017-10-12 10:11:59.272163-06
14	4	4	2017-10-12 10:13:20.55012-06	2017-10-12 10:13:20.55012-06
15	4	1	2017-10-12 10:13:26.478237-06	2017-10-12 10:13:26.478237-06
16	4	3	2017-10-12 10:13:31.933975-06	2017-10-12 10:13:31.933975-06
17	4	18	2017-10-12 10:13:35.134065-06	2017-10-12 10:13:35.134065-06
18	5	1	2017-10-12 11:33:33.354132-06	2017-10-12 11:33:33.354132-06
19	6	18	2017-10-12 12:09:08.975294-06	2017-10-12 12:09:08.975294-06
20	6	1	2017-10-12 12:09:13.343132-06	2017-10-12 12:09:13.343132-06
21	5	1	2017-10-12 12:24:06.751185-06	2017-10-12 12:24:06.751185-06
\.


--
-- Name: helps_id_seq; Type: SEQUENCE SET; Schema: public; Owner: olivetree
--

SELECT pg_catalog.setval('helps_id_seq', 21, true);


--
-- Data for Name: knex_migrations; Type: TABLE DATA; Schema: public; Owner: olivetree
--

COPY knex_migrations (id, name, batch, migration_time) FROM stdin;
21	1_cohorts_users.js	1	2017-10-11 16:51:05.069-06
22	2_dailyplan.js	1	2017-10-11 16:51:05.077-06
23	3_dailyplans_events_lessons_units_mastery.js	1	2017-10-11 16:51:05.107-06
24	4_users_assignments_helps.js	1	2017-10-11 16:51:05.12-06
\.


--
-- Name: knex_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: olivetree
--

SELECT pg_catalog.setval('knex_migrations_id_seq', 24, true);


--
-- Data for Name: knex_migrations_lock; Type: TABLE DATA; Schema: public; Owner: olivetree
--

COPY knex_migrations_lock (is_locked) FROM stdin;
0
\.


--
-- Data for Name: lessons; Type: TABLE DATA; Schema: public; Owner: olivetree
--

COPY lessons (id, title, location_url, dailyplan_id, unit_id, created_at, updated_at) FROM stdin;
\.


--
-- Name: lessons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: olivetree
--

SELECT pg_catalog.setval('lessons_id_seq', 1, false);


--
-- Data for Name: mastery_track; Type: TABLE DATA; Schema: public; Owner: olivetree
--

COPY mastery_track (id, title, description, created_at, updated_at) FROM stdin;
1	No Title	No Description	2017-10-11 17:35:05.962453-06	2017-10-11 17:35:05.962453-06
\.


--
-- Name: mastery_track_id_seq; Type: SEQUENCE SET; Schema: public; Owner: olivetree
--

SELECT pg_catalog.setval('mastery_track_id_seq', 1, false);


--
-- Data for Name: units; Type: TABLE DATA; Schema: public; Owner: olivetree
--

COPY units (id, title, description, location_url, created_at, updated_at) FROM stdin;
1	Productivity	\N	http://www.unit.com	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
2	Development Environment	\N	http://www.unit.com	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
3	Javascript Language and Concepts	\N	http://www.unit.com	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
4	Javascript - Functional Programming	\N	http://www.unit.com	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
5	HTML	\N	http://www.unit.com	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
6	CSS	\N	http://www.unit.com	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
7	The DOM	\N	http://www.unit.com	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
8	jQuery	\N	http://www.unit.com	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
9	HTTP and AJAX	\N	http://www.unit.com	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
10	Intro to Node and Express	\N	http://www.unit.com	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
11	Javascript Accumulator Pattern	\N	http://www.unit.com	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
12	Javascript Object Creation	\N	http://www.unit.com	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
13	Intro to SQL	\N	http://www.unit.com	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
14	Intro to Knex and Express	\N	http://www.unit.com	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
15	Promises and Validation	\N	http://www.unit.com	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
16	Intro to React	\N	http://www.unit.com	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
17	React - Modern Javascript	\N	http://www.unit.com	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
18	React Components	\N	http://www.unit.com	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
19	React - Integrating with APIs	\N	http://www.unit.com	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
20	React - Redux	\N	\N	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
21	React Router	\N	\N	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
22	React - Testing	\N	\N	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
23	Angular - Building Apps	\N	\N	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
24	Angular - API Integration	\N	\N	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
25	Angular - Organizing Code	\N	\N	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
26	Angular - Deploying	\N	\N	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
27	Computer Science	\N	\N	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
28	Java	\N	\N	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
29	Elective - C#	\N	\N	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
30	Checkpoints	\N	\N	2017-10-11 17:35:05.959291-06	2017-10-11 17:35:05.959291-06
\.


--
-- Name: units_id_seq; Type: SEQUENCE SET; Schema: public; Owner: olivetree
--

SELECT pg_catalog.setval('units_id_seq', 1, false);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: olivetree
--

COPY users (id, first_name, middle_initial, last_name, email, hashed_password, is_instructor, is_enabled, created_at, updated_at) FROM stdin;
1	Craig		Quincy	craig@craig.com	                                                            	t	t	2017-10-11 17:35:05.944688-06	2017-10-11 17:35:05.944688-06
2	Pete		Silva	pete@pete.com	                                                            	t	t	2017-10-11 17:35:05.944688-06	2017-10-11 17:35:05.944688-06
3	Alicia		Key	alicia@alicia.com	                                                            	t	t	2017-10-11 17:35:05.944688-06	2017-10-11 17:35:05.944688-06
4	Gena		Israel	gena@gena.com	$2a$10$b5ZN4Jsr.xPdD7FswhRHf.r.GtcH/jBsIsGuDOrdV4YYceDCpdnLe	f	t	2017-10-11 17:35:05.944688-06	2017-10-11 17:35:05.944688-06
5	Danah		Olivetree	danah@danah.com	                                                            	f	t	2017-10-11 17:35:05.944688-06	2017-10-11 17:35:05.944688-06
6	Steven	J	Burns	stevenjburns@msn.com	                                                            	f	t	2017-10-11 17:35:05.944688-06	2017-10-11 17:35:05.944688-06
\.


--
-- Data for Name: users_assignments; Type: TABLE DATA; Schema: public; Owner: olivetree
--

COPY users_assignments (id, user_id, assignment_id, grade, created_at, updated_at) FROM stdin;
1	5	1	3	2017-10-11 17:35:05.971172-06	2017-10-11 17:35:05.971172-06
2	5	2	2	2017-10-11 17:35:05.971172-06	2017-10-11 17:35:05.971172-06
3	5	3	1	2017-10-11 17:35:05.971172-06	2017-10-11 17:35:05.971172-06
4	5	4	2	2017-10-11 17:35:05.971172-06	2017-10-11 17:35:05.971172-06
5	5	5	3	2017-10-11 17:35:05.971172-06	2017-10-11 17:35:05.971172-06
6	5	6	2	2017-10-11 17:35:05.971172-06	2017-10-11 17:35:05.971172-06
7	5	7	3	2017-10-11 17:35:05.971172-06	2017-10-11 17:35:05.971172-06
8	5	8	3	2017-10-11 17:35:05.971172-06	2017-10-11 17:35:05.971172-06
9	5	9	3	2017-10-11 17:35:05.971172-06	2017-10-11 17:35:05.971172-06
10	5	10	3	2017-10-11 17:35:05.971172-06	2017-10-11 17:35:05.971172-06
11	5	11	3	2017-10-11 17:35:05.971172-06	2017-10-11 17:35:05.971172-06
12	5	12	3	2017-10-11 17:35:05.971172-06	2017-10-11 17:35:05.971172-06
13	5	13	3	2017-10-11 17:35:05.971172-06	2017-10-11 17:35:05.971172-06
14	5	14	3	2017-10-11 17:35:05.971172-06	2017-10-11 17:35:05.971172-06
15	5	15	3	2017-10-11 17:35:05.971172-06	2017-10-11 17:35:05.971172-06
16	5	16	3	2017-10-11 17:35:05.971172-06	2017-10-11 17:35:05.971172-06
17	5	17	3	2017-10-11 17:35:05.971172-06	2017-10-11 17:35:05.971172-06
18	5	18	3	2017-10-11 17:35:05.971172-06	2017-10-11 17:35:05.971172-06
19	5	19	3	2017-10-11 17:35:05.971172-06	2017-10-11 17:35:05.971172-06
\.


--
-- Name: users_assignments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: olivetree
--

SELECT pg_catalog.setval('users_assignments_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: olivetree
--

SELECT pg_catalog.setval('users_id_seq', 1, false);


--
-- Name: assignments assignments_pkey; Type: CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY assignments
    ADD CONSTRAINT assignments_pkey PRIMARY KEY (id);


--
-- Name: cohorts cohorts_pkey; Type: CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY cohorts
    ADD CONSTRAINT cohorts_pkey PRIMARY KEY (id);


--
-- Name: cohorts_users cohorts_users_pkey; Type: CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY cohorts_users
    ADD CONSTRAINT cohorts_users_pkey PRIMARY KEY (id);


--
-- Name: dailyplans_events dailyplans_events_pkey; Type: CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY dailyplans_events
    ADD CONSTRAINT dailyplans_events_pkey PRIMARY KEY (id);


--
-- Name: dailyplans dailyplans_pkey; Type: CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY dailyplans
    ADD CONSTRAINT dailyplans_pkey PRIMARY KEY (id);


--
-- Name: helps helps_pkey; Type: CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY helps
    ADD CONSTRAINT helps_pkey PRIMARY KEY (id);


--
-- Name: knex_migrations knex_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY knex_migrations
    ADD CONSTRAINT knex_migrations_pkey PRIMARY KEY (id);


--
-- Name: lessons lessons_pkey; Type: CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY lessons
    ADD CONSTRAINT lessons_pkey PRIMARY KEY (id);


--
-- Name: mastery_track mastery_track_pkey; Type: CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY mastery_track
    ADD CONSTRAINT mastery_track_pkey PRIMARY KEY (id);


--
-- Name: units units_pkey; Type: CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY units
    ADD CONSTRAINT units_pkey PRIMARY KEY (id);


--
-- Name: users_assignments users_assignments_pkey; Type: CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY users_assignments
    ADD CONSTRAINT users_assignments_pkey PRIMARY KEY (id);


--
-- Name: users users_email_unique; Type: CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_email_unique UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: assignments assignments_mastery_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY assignments
    ADD CONSTRAINT assignments_mastery_id_foreign FOREIGN KEY (mastery_id) REFERENCES mastery_track(id) ON DELETE CASCADE;


--
-- Name: assignments assignments_unit_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY assignments
    ADD CONSTRAINT assignments_unit_id_foreign FOREIGN KEY (unit_id) REFERENCES units(id) ON DELETE CASCADE;


--
-- Name: cohorts_users cohorts_users_cohort_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY cohorts_users
    ADD CONSTRAINT cohorts_users_cohort_id_foreign FOREIGN KEY (cohort_id) REFERENCES cohorts(id) ON DELETE CASCADE;


--
-- Name: cohorts_users cohorts_users_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY cohorts_users
    ADD CONSTRAINT cohorts_users_user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: dailyplans_events dailyplans_events_dailyplan_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY dailyplans_events
    ADD CONSTRAINT dailyplans_events_dailyplan_id_foreign FOREIGN KEY (dailyplan_id) REFERENCES dailyplans(id) ON DELETE CASCADE;


--
-- Name: dailyplans dailyplans_users_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY dailyplans
    ADD CONSTRAINT dailyplans_users_id_foreign FOREIGN KEY (users_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: helps helps_assignment_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY helps
    ADD CONSTRAINT helps_assignment_id_foreign FOREIGN KEY (assignment_id) REFERENCES assignments(id) ON DELETE CASCADE;


--
-- Name: helps helps_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY helps
    ADD CONSTRAINT helps_user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: lessons lessons_dailyplan_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY lessons
    ADD CONSTRAINT lessons_dailyplan_id_foreign FOREIGN KEY (dailyplan_id) REFERENCES units(id) ON DELETE CASCADE;


--
-- Name: lessons lessons_unit_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY lessons
    ADD CONSTRAINT lessons_unit_id_foreign FOREIGN KEY (unit_id) REFERENCES units(id) ON DELETE CASCADE;


--
-- Name: users_assignments users_assignments_assignment_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY users_assignments
    ADD CONSTRAINT users_assignments_assignment_id_foreign FOREIGN KEY (assignment_id) REFERENCES assignments(id) ON DELETE CASCADE;


--
-- Name: users_assignments users_assignments_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: olivetree
--

ALTER TABLE ONLY users_assignments
    ADD CONSTRAINT users_assignments_user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

