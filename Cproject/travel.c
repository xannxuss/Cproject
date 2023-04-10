#include "boolean.h"
#include "exception.h"
#include "extgraph.h"
#include "gcalloc.h"
#include "genlib.h"
#include "graphics.h"
#include "imgui.h"
#include "linkedlist.h"
#include "random.h"
#include "simpio.h"
#include "strlib.h"

typedef struct tourism/*旅游项目结构体*/
{
char num[10];  /*项目编号*/
char name[10];  /*旅游项目名称*/
char place[10]; /*地点*/
int money;     /*金额*/   
}Tourism;




void Main()
{
	SetWindowSize(30,20);
	SetWindowTitle("浙大旅游网");
	InitGraphics();
}
