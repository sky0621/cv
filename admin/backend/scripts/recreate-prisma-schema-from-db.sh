#!/bin/bash

cd ../src
npx prisma db pull
npx prisma generate
