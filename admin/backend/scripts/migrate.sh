#!/bin/bash

npx prisma migrate dev --name init --schema ../prisma/schema.prisma
