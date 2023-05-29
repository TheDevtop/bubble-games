package main

type StypeEntry struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
	Desc string `json:"desc"`
}

type StoryEntry struct {
	Id        int    `json:"id"`
	Title     string `json:"title"`
	StoryType int    `json:"storyType"`
	DateTime  string `json:"dateTime"`
}

type Database struct {
	Stories    []StoryEntry
	StoryTypes []StypeEntry
}
