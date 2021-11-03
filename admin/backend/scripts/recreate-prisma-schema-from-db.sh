#!/bin/bash

cd ..
npx prisma introspect
npx prisma generate
