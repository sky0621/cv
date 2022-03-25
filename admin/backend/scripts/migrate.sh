#!/bin/bash

npx prisma migrate dev --name init --schema ../src/prisma/schema.prisma
