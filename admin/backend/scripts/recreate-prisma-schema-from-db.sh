#!/bin/bash

cd ../src
npx prisma introspect
npx prisma generate
