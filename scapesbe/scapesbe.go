package main

/*
This code was written in a single night while tired and slightly tipsy.
This code should NOT/NEVER/NAHA be used in production.

If the production usage of this code results in the annihilation of the world,
its considered the users fault, not the authors.
*/

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strconv"

	"github.com/TheDevtop/tpjson"
)

const (
	mediaPath  = "./media/"
	listenAddr = ":8082"
	allocSize  = 1
)

var localDB Database

func populateDB() {
	localDB = *new(Database)
	localDB.Stories = make([]StoryEntry, allocSize)
	localDB.StoryTypes = make([]StypeEntry, allocSize)

	localDB.StoryTypes = []StypeEntry{
		{
			Id:   1,
			Name: "Work",
			Desc: "Stories about work and career",
		},
		{
			Id:   2,
			Name: "Family",
			Desc: "Stories about family relationships.",
		},
		{
			Id:   3,
			Name: "Love",
			Desc: "Stories about love and relationships.",
		},
		{
			Id:   4,
			Name: "Future",
			Desc: "Stories about aspirations and goals.",
		},
		{
			Id:   5,
			Name: "Friends",
			Desc: "Stories about friendships and connections.",
		},
		{
			Id:   6,
			Name: "Money",
			Desc: "Stories related to finances and wealth.",
		},
		{
			Id:   7,
			Name: "Health",
			Desc: "Stories about physical and mental well-being.",
		},
		{
			Id:   8,
			Name: "Past",
			Desc: "Stories about past experiences and memories.",
		},
		{
			Id:   9,
			Name: "Sport",
			Desc: "Stories related to sports and athletics.",
		},
		{
			Id:   10,
			Name: "School",
			Desc: "Stories about education and learning.",
		},
	}
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func main() {

	populateDB()

	http.HandleFunc("/database/all", func(w http.ResponseWriter, r *http.Request) {
		if err := tpjson.SendJSON(w, localDB); err != nil {
			log.Println(err)
		}
	})

	http.HandleFunc("/database/types", func(w http.ResponseWriter, r *http.Request) {
		if err := tpjson.SendJSON(w, localDB.StoryTypes); err != nil {
			log.Println(err)
		}
	})

	http.HandleFunc("/database/stories", func(w http.ResponseWriter, r *http.Request) {
		if err := tpjson.SendJSON(w, localDB.Stories); err != nil {
			log.Println(err)
		}
	})

	http.HandleFunc("/database/stories/single", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case "POST":
			func(w http.ResponseWriter, r *http.Request) {
				enableCors(&w)
				e := new(StoryEntry)
				if err := tpjson.ReceiveJSON(r, e); err != nil {
					log.Println(err)
					return
				}
				localDB.Stories = append(localDB.Stories, *e)
			}(w, r)
			return
		case "GET":
			func(w http.ResponseWriter, r *http.Request) {
				idStr := r.URL.Query().Get("id")
				i, _ := strconv.Atoi(idStr)
				for _, item := range localDB.Stories {
					if item.Id == i {
						tpjson.SendJSON(w, item)
						return
					}
				}
			}(w, r)
			return
		default:
			http.NotFound(w, r)
			return
		}
	})

	http.HandleFunc("/media", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case "POST":
			func(w http.ResponseWriter, r *http.Request) {
				enableCors(&w)
				idStr := r.URL.Query().Get("id")
				if fd, err := os.Create(fmt.Sprintf("%s%s.mp3", mediaPath, idStr)); err != nil {
					log.Println(err)
				} else {
					io.Copy(fd, r.Body)
				}
			}(w, r)
			return
		case "GET":
			func(w http.ResponseWriter, r *http.Request) {
				idStr := r.URL.Query().Get("id")
				if fd, err := os.Open(fmt.Sprintf("%s%s.mp3", mediaPath, idStr)); err != nil {
					log.Println(err)
				} else {
					io.Copy(w, fd)
					fd.Close()
				}
			}(w, r)
			return
		default:
			http.NotFound(w, r)
			return
		}
	})

	http.ListenAndServe(listenAddr, nil)
}
