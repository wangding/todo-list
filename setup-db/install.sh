#!/bin/bash

mysql -h 127.0.0.1 -u root -p < schema.sql
mysqlimport -h 127.0.0.1 -u root -p --local todo_list users.data
mysqlimport -h 127.0.0.1 -u root -p --local todo_list tasks.data
